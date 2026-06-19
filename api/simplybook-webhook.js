const SIMPLYBOOK_API = 'https://user-api.simplybook.it/admin/';
const QLICK_API_URL  = 'https://tn25x6zc4i1.qlickcrm.com/api/v2/contact';
const QLICK_DEFAULTS = { language_id: 1, currency_id: 1, taxrate_id: 1 };

async function simplybookRpc(method, params, token) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers['X-Company-Login'] = process.env.SIMPLYBOOK_COMPANY;
    headers['X-User-Token']    = token;
  }
  const res = await fetch(SIMPLYBOOK_API, {
    method: 'POST',
    headers,
    body: JSON.stringify({ jsonrpc: '1.1', method, params, id: 1 }),
  });
  const json = await res.json();
  return json.result;
}

async function getSimplybookToken() {
  return simplybookRpc('getToken', [
    process.env.SIMPLYBOOK_COMPANY,
    process.env.SIMPLYBOOK_API_KEY,
    process.env.SIMPLYBOOK_SECRET_KEY,
  ]);
}

async function getBookingClient(bookingId, token) {
  const booking = await simplybookRpc('getBooking', [bookingId], token);
  if (!booking) return null;

  const clientId = booking.client_id || booking.clientId;
  const client   = await simplybookRpc('getClientInfo', [clientId], token);

  return {
    firstname: client?.name?.split(' ')[0] || booking.client_name?.split(' ')[0] || 'Ismeretlen',
    lastname:  client?.name?.split(' ').slice(1).join(' ') || booking.client_name?.split(' ').slice(1).join(' ') || '-',
    email:     client?.email || null,
    phone:     client?.phone || null,
  };
}

async function createQlickContact(client) {
  const payload = {
    contact_type: 'person',
    firstname:    client.firstname,
    lastname:     client.lastname,
    ...QLICK_DEFAULTS,
    ...(client.email ? { emails: [{ email: client.email }] } : {}),
    ...(client.phone ? { phonenumbers: [client.phone] }      : {}),
  };

  const res = await fetch(QLICK_API_URL, {
    method: 'POST',
    headers: {
      AuthToken:        process.env.QLICK_API_KEY,
      'Content-Type':   'application/json',
      Accept:           'application/json',
    },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { booking_id, notification_type } = req.body;

  // Törlés/lemondás → kontakt megmarad, nem csinálunk semmit
  if (notification_type === 'cancel') {
    return res.status(200).json({ action: 'skipped', reason: 'cancellation' });
  }

  // Új foglalás vagy módosítás → kontakt létrehozása / frissítése
  if (notification_type === 'create' || notification_type === 'change' || notification_type === 'notify') {
    try {
      const token  = await getSimplybookToken();
      const client = await getBookingClient(booking_id, token);

      if (!client) {
        return res.status(200).json({ action: 'skipped', reason: 'no client data' });
      }

      const result = await createQlickContact(client);
      return res.status(200).json({ action: notification_type, qlick: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(200).json({ action: 'skipped', reason: 'unknown event' });
}
