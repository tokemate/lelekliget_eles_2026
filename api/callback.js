export default async function handler(req, res) {
  const { code } = req.query;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id:     process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const { access_token, error } = await tokenRes.json();

  if (error || !access_token) {
    return res.status(401).send(`<script>window.opener.postMessage('authorization:github:error:${error}','*')</script>`);
  }

  const content = JSON.stringify({ token: access_token, provider: 'github' });
  res.send(`
    <script>
      (function() {
        function handleMessage(e) {
          window.removeEventListener('message', handleMessage, false);
          window.opener.postMessage('authorization:github:success:${content}', e.origin);
        }
        window.addEventListener('message', handleMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  `);
}
