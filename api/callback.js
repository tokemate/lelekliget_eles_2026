export default async function handler(req, res) {
  const { code, error: oauthError } = req.query;

  if (oauthError || !code) {
    return html(res, `<p style="color:red">OAuth hiba: ${oauthError || 'hiányzó code'}</p>`);
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
    return html(res, `<p style="color:red">Fetch hiba: ${e.message}</p>`);
  }

  if (tokenError || !access_token) {
    return html(res, `<p style="color:red">Token hiba: ${JSON.stringify({ tokenError, access_token })}</p>`);
  }

  const msgData = JSON.stringify({ token: access_token, provider: 'github' });
  const fullMsg = JSON.stringify('authorization:github:success:' + msgData);

  html(res, `<script>
(function() {
  var log = function(t) { document.getElementById('log').textContent += t + '\\n'; };
  log('window.opener: ' + (window.opener ? 'OK' : 'NULL'));

  var msg = ${fullMsg};
  log('msg prefix: ' + msg.substring(0, 50));

  if (!window.opener) {
    log('HIBA: window.opener null - nem tud üzenetet küldeni!');
    return;
  }

  window.opener.postMessage(msg, '*');
  log('postMessage elküldve');
  setTimeout(function() { window.close(); }, 3000);
})();
</script>
<pre id="log" style="padding:1rem;background:#f0f0f0;font-size:13px;font-family:monospace">Debug log:\n</pre>`);
}

function html(res, body) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!doctype html><html><body style="font-family:sans-serif;padding:1rem">${body}</body></html>`);
}
