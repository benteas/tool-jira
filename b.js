
let jwt = require('jsonwebtoken');
let fs = require('fs');
const crypto = require('crypto');

// sign with RSA SHA256
let privateKey = fs.readFileSync('./pkcs8.key',"utf8");
console.log(111111, privateKey);

//var decrypted = crypto.privateDecrypt(privateKey, buffer);
const decrypted = crypto.privateDecrypt(
  {
    key: privateKey.toString(),
  },
)

console.log(77777, decrypted);

// const keyObject = crypto.createPrivateKey('cssss');

let token = jwt.sign({ foo: 'bar' }, privateKey, {algorithm: 'RS256'});

// jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
//   console.log(88888, err);
//   console.log(99999, token);
// });

// console.log(22222,token);

var cert = fs.readFileSync('./key/publickey.crt');  // get public key
// console.log(22222, cert);
jwt.verify(token, cert, { algorithms: ['RS256'] }, function(err, decoded) {
  // console.log(9999,decoded) // bar
  // console.log(88888,err) // bar/
});

// console.log(3333333, token);
