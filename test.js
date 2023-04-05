
const crypto = require('crypto');

const privateKeyPEM = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQC+AkXn7VThB8h7iMr7RrlMPQlZww2ArIRqdh2acykr6Gqrf//n
dEiAXcKPw2dP21yLXeY0zY2C8TtkW4uO+vAj/h2fB/DKFj1Bd3h++WuHSedivghJ
VEjxIesqaEl1Qlctj1ml+HfhLraRrn0QjmQxKfQo7RzNqVHr3/9Jwj6wZwIDAQAB
AoGAemUscsHGs044LptnZYWhRyLqKxAiWojGo22ClEMqekY0sFS7m3SkX0wGUGUm
36IGcyABcnIWfgq2n2b49xleJjP1c8ey/fUdB5g6ffkrDR4/QMBF3ohoELjKQOnJ
bSidn2QFpPiCvZpe/urPJPEL+dIYEkU8PjpAifRMX3ACvsECQQDxa0CwAv98RrVK
i7uX0oLyxwe2bc3bDJdqARSLTa1zsUXmQRCLOUR8OTrFuOWNzy/nfhVGpmju2QTW
MBNAi9bzAkEAyXwiG7t/jVTslhZM/R9PSL1+TRTi6ZlXh7k5G3QMld8mR7N6UcnO
PvQjeaLXagrfaN8g0D2c6jdJx77j3QjFvQJAZCcOavaTbscWpppZdJ6MXJNdC715
zQnoNr3D/BZ5gqlkSiVr65YSZ0aGr0gJU09EnFCeGvUmSxAVBZZkJj7dKQJAEv8c
LCcycH3YTJJPsfHYxM/w742Pk1y8zvQcuUToxtyiPFJkrv9q7a6RBa/fxYS+6aFX
86pLeB28XBPYYgeotQJAf4dl2/iqOECYP/F8IbGKoEiXKbrOg6qwLuIQ5MqRH2fd
W50SLcZHh7Dj/LSm1kkNhRxxVWMsiomNGaR5tLLYGA==
-----END RSA PRIVATE KEY-----`;

const privateKey = crypto.createPrivateKey({  
  key: privateKeyPEM,
  format: "pem",
  type: "pkcs1",
  passphrase: "",
  encoding: "utf-8"
});