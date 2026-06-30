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

  // Decap CMS requires a two-step handshake on this page:
  // 1) popup sends "authorizing:github" to the opener
  // 2) opener echoes it back once its real listener is installed
  // 3) only then does the popup send the actual token message
  html(res, `<pre id="log" style="padding:1rem;background:#f0f0f0;font-size:13px;font-family:monospace">Debug log:
</pre>
<script>
(function() {
  var el = document.getElementById('log');
  var log = function(t) { el.textContent += t + '\\n'; };

  log('window.opener: ' + (window.opener ? 'OK' : 'NULL'));

  if (!window.opener) {
    log('HIBA: window.opener null!');
    return;
  }

  var msg = ${fullMsg};

  function receiveMessage(e) {
    log('handshake echo erkezett origin=' + e.origin);
    window.removeEventListener('message', receiveMessage, false);
    window.opener.postMessage(msg, e.origin);
    log('token postMessage elkuldve - 3mp mulva bezar');
    setTimeout(function() { window.close(); }, 3000);
  }

  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
  log('handshake elkuldve, varakozas az echo-ra');
})();
<\/script>`);
}

function html(res, body) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!doctype html><html><body style="font-family:sans-serif;padding:1rem">${body}</body></html>`);
}
