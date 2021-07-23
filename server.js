const express = require('express');
const app = express();
require('dotenv').config()
let port = process.env.PORT || 3000 

app.listen(port, () => { console.log('listening to http://localhost:'+port+'/'+5025201105);
    app.get('/:in', (req,res) => {
        function valid(header)
        {
            if(header && header == process.env.headtoken)
                return true;
            return false;
        }
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

        !valid(req.headers.token)? res.send(401) :
        !isNaN(req.params.in)? getWithNRP(req.params.in) : getWithName(req.params.in);
    });

    app.get('/', (req,res) => {
        res.send('<p>Usage: Header: {token: (tanya marsel) }</p><p>/{nrp} => cari pake nrp (harus lengkap ya)</p><p>/{nama} => cari pake nama (bisa nama lengkap/nama singkat) => bakal nge return array kalo ada yg sama namanya (lagian nama pasaran :v)</p><p>development on:<a href ="https://github.com/Marcellinom/database_tc20">https://github.com/Marcellinom/database_tc20</a> (tenang data kalian di encrypt) ;)</p>');
    })
})