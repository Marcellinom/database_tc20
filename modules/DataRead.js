const fs = require('fs');
const { decrypt } = require('./cryp');

const raw_e = fs.readFileSync('./modules/storage/tc20_e.json');
const raw = decrypt(JSON.parse(raw_e));
/** Returns Array */
module.exports = JSON.parse(raw);