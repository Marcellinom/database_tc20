const fs = require('fs');
const { decrypt } = require('./cryp');

module.exports = {
    execute: (nrp) => {
        const raw_e = fs.readFileSync('./modules/storage/tc20_e.json');
        const raw = decrypt(JSON.parse(raw_e));
        const data = JSON.parse(raw);
        let num = Number(nrp);
        if(isNaN(num) || num > 5025201276 || num < 5025201002) return 404;

        let index = num - 5025201000;
        if(index > 253) index = 253;
        console.log(index);
        
        var timerun = 0;
        while(data[index].NRP != nrp)
        {
            if(data[index].NRP > nrp ) index--;
            else index++;
            if(timerun++ > 50) return 404;
        }
        return [data[index]];
    }
}
