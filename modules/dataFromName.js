const fs = require('fs');
const { decrypt } = require('./cryp');

module.exports = {
    execute: (name) => {
        const raw_e = fs.readFileSync('./modules/storage/tc20_e.json');
        const raw = decrypt(JSON.parse(raw_e));
        const data = JSON.parse(raw);

        var final = [];
        data.forEach(d => {
            if(d.NAMA.toLowerCase().includes(name))
                final.push(d);
        });
        if(!final.length) return 404;
        return final;
    }
}