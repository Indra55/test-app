import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holonet</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      font-family: 'Courier New', monospace;
      color: #fff;
    }
    .card {
      text-align: center;
      padding: 48px 64px;
      border: 1px solid #222;
      border-radius: 4px;
      background: #111;
    }
    .badge {
      display: inline-block;
      background: #7c3aed;
      color: #fff;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 2px;
      margin-bottom: 24px;
    }
    h1 { font-size: 2rem; font-weight: 400; margin-bottom: 12px; }
    p { color: #666; font-size: 0.9rem; }
    .dot {
      display: inline-block;
      width: 8px; height: 8px;
      background: #22c55e;
      border-radius: 50%;
      margin-right: 8px;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Holonet</div>
    <h1>testapp.hitanshu.xyz</h1>
    <p><span class="dot"></span>deployed and running</p>
  </div>
</body>
</html>`)
})

app.listen(3000, () => console.log('running on 3000'))
