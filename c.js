// const fs = require('fs');
// const jwt = require('jsonwebtoken');
// const privatekey = fs.readFileSync('./private-key.pem','utf8')

// console.log(5555, privatekey);

// jwt.sign({ foo: 'bar' }, privatekey, { algorithm: 'RS256' }, function(err, token) {
//   console.log(token);
//   console.log(err);
// });

const fs = require('fs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const privatekey = fs.readFileSync('./private-key.pem');
// const privateKeyObject = crypto.createPrivateKey(privatekey);

jwt.sign({ foo: 'bar' }, privatekey, { algorithm: 'RS256' }, function(err, token) {
  console.log(token);
  console.log(err);
});

