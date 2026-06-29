export default async function handler(req, res) {
  const { code, error: oauthError } = req.query;

  if (oauthError || !code) {
    return res.setHeader('Content-Type', 'text/html').send(
      `<p style="color:red;font-family:sans-serif;padding:2rem">OAuth hiba: ${oauthError || 'hiányzó code'}</p>`
    );
  }

  let access_token, tokenError;
  try {
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id:     process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    const data = await r.json();
    access_token = data.access_token;
    tokenError   = data.error;
  } catch (e) {
    tokenError = e.message;
  }

  if (tokenError || !access_token) {
    return res.setHeader('Content-Type', 'text/html').send(
      `<p style="color:red;font-family:sans-serif;padding:2rem">Token hiba: ${tokenError || 'üres token'}</p>`
    );
  }

  // Build the postMessage string Decap CMS expects
  const msgData = JSON.stringify({ token: access_token, provider: 'github' });
  const fullMsg = JSON.stringify('authorization:github:success:' + msgData);

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!doctype html><html><body><script>
(function() {
  var msg = ${fullMsg};
  window.opener.postMessage(msg, '*');
  setTimeout(function() { window.close(); }, 500);
})();
</script></body></html>`);
}
