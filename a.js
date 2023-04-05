const crypto = require('crypto');
let jwt = require('jsonwebtoken');
let fs = require('fs');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

console.log(privateKey)



console.log('Public key:', publicKey.export({ type: 'spki', format: 'pem' }));
console.log('Private key:', privateKey.export({ type: 'pkcs8', format: 'pem' }));

const test = privateKey.export({ type: 'pkcs8', format: 'pem' });
console.log(crypto.createPrivateKey(test));

//KeyObject

let token = jwt.sign('this is my world!', privateKey, { algorithm: 'RS256' });


jwt.verify(token, publicKey, { algorithms: ['RS256'] }, function(err, decoded) {
  console.log(9999,decoded) // bar
});


