const app = require('express')();
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/home/ninh/ninh.key'),
  cert: fs.readFileSync('/home/ninh/ninh.crt'),
  passphrase: 'ninh',
  requestCert: false,
  rejectUnauthorized: false
};

app.get('/', ({ res }) => {
  res.send('Hello');
});

// Start server
const server = https.createServer(options, app);

server.listen(3000, function() {
  console.log('Start at https://ninh:' + 3000);
});
