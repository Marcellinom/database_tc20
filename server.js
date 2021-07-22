const express = require('express');
const app = express();
let port = process.env.PORT || 3000 

app.listen(port, () => { console.log('listening to http://localhost:'+port+'/'+5025201105);
    app.get('/:in', (req,res) => {
        async function getWithNRP(nrp)
        {
            const data = require('./modules/dataFromNRP').execute(nrp);
            res.send(data);
            console.log("success");
        }
        async function getWithName(name)
        {
            const data = require('./modules/dataFromName').execute(name);
            res.send(data);
            console.log("success");
        }
        if(!isNaN(req.params.in))
            getWithNRP(req.params.in);
        else 
            getWithName(req.params.in);
    });

    app.get('/', (req,res) => {
        res.send('<p>Usage:</p><p>/{nrp} => cari pake nrp (harus lengkap ya)</p><p>/{nama} => cari pake nama (bisa nama lengkap/nama singkat) => bakal nge return array kalo ada yg sama namanya (lagian nama pasaran :v)</p><p>on development: https://github.com/Marcellinom/database_tc20 (tenang data kalian di encrypt)</p>');
    })
})