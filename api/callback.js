export default async function handler(req, res) {
  const { code, error: oauthError } = req.query;

  if (oauthError) {
    return res.send(errorPage('GitHub OAuth hiba: ' + oauthError));
  }

  if (!code) {
    return res.send(errorPage('Hiányzó code paraméter'));
  }

  let tokenData;
  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id:     process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    tokenData = await tokenRes.json();
  } catch (e) {
    return res.send(errorPage('Fetch hiba: ' + e.message));
  }

  const { access_token, error: tokenError } = tokenData;

  if (tokenError || !access_token) {
    return res.send(errorPage('Token hiba: ' + JSON.stringify(tokenData)));
  }

  const payload = JSON.stringify(JSON.stringify({ token: access_token, provider: 'github' }));

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!doctype html><html><body><script>
(function() {
  var payload = ${payload};
  function onMessage(e) {
    window.removeEventListener('message', onMessage, false);
    window.opener.postMessage('authorization:github:success:' + payload, e.origin);
    window.close();
  }
  window.addEventListener('message', onMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script></body></html>`);
}

function errorPage(msg) {
  return `<!doctype html><html><body style="font-family:sans-serif;padding:2rem">
<h2 style="color:red">CMS bejelentkezési hiba</h2>
<pre style="background:#f5f5f5;padding:1rem;border-radius:8px">${msg}</pre>
<p>Zárd be ezt az ablakot és próbáld újra.</p>
</body></html>`;
}
