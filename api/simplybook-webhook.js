const QLICK_API_URL = 'https://tn25x6zc4i1.qlickcrm.com/api/v2/contact';
const QLICK_DEFAULTS = { language_id: 1, currency_id: 1, taxrate_id: 1 };

function extractClient(body) {
  // SimplyBook sends different shapes depending on event type
  const c = body.client || body.booking?.client || body.data?.client || body;
  const fullName = (c.name || c.client_name || '').trim();
  const parts = fullName.split(/\s+/);

  return {
    firstname: c.firstname || c.client_firstname || parts[0] || 'Ismeretlen',
    lastname:  c.lastname  || c.client_lastname  || parts.slice(1).join(' ') || '-',
    email:     c.email     || c.client_email     || null,
    phone:     c.phone     || c.client_phone     || null,
  };
}

async function createQlickContact(client) {
  const payload = {
    contact_type: 'person',
    firstname: client.firstname,
    lastname:  client.lastname,
    ...QLICK_DEFAULTS,
    ...(client.email ? { emails: [{ email: client.email }] } : {}),
    ...(client.phone ? { phonenumbers: [client.phone] } : {}),
  };

  const res = await fetch(QLICK_API_URL, {
    method: 'POST',
    headers: {
      AuthToken: process.env.QLICK_API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;
  const event = body.notification_type || body.event || body.type || 'booking_created';

  // Új foglalás → új kontakt
  if (/creat|new|add/i.test(event)) {
    const client = extractClient(body);
    const result = await createQlickContact(client);
    return res.status(200).json({ action: 'created', qlick: result });
  }

  // Módosítás → kontakt adatok frissítése (ugyanúgy: POST /v2/contact, Qlick idempotens az e-mail alapján)
  if (/modif|updat|chang/i.test(event)) {
    const client = extractClient(body);
    const result = await createQlickContact(client);
    return res.status(200).json({ action: 'updated', qlick: result });
  }

  // Törlés → nem csinálunk semmit, a kontakt marad a CRM-ben
  if (/cancel|delet/i.test(event)) {
    return res.status(200).json({ action: 'skipped', reason: 'cancellation ignored' });
  }

  // Ismeretlen event → kontakt létrehozása biztonságból
  const client = extractClient(body);
  const result = await createQlickContact(client);
  return res.status(200).json({ action: 'created_fallback', qlick: result });
}
