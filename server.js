const express = require('express');
const app = express();
require('dotenv').config()
let port = process.env.PORT || 3000 

app.listen(port, () => { 
    app.get('/:in', (req,res) => {
        const input = req.params.in;
        function valid(header)
        {
            if(header && header == process.env.token)
                return true;
            return false;
        }

        async function getWithNRP(nrp)
        {
            console.log("get with nrp");
            const data = require('./modules/dataFromNRP').execute(nrp);
            res.send(data);
            console.log("success");
        }
        async function getWithName(name)
        {
            console.log("get with name");
            const data = require('./modules/dataFromName').execute(name);
            res.send(data);
            console.log("success");
        }
        async function getWithBirthday(bd)
        {
            console.log("get with birthday");
            const data = require('./modules/dataFromBirthday').execute(bd);
            res.send(data);
            console.log("success");
        }

        !valid(req.headers.token)? res.send(401) : 
        input.includes('-')? getWithBirthday(input) :
        !isNaN(input)? getWithNRP(input) : getWithName(input);
    });

    app.get('/', (req,res) => {
        res.send('<p>Usage: Header: {token: (tanya marsel) }</p><p>/{nrp} => cari pake nrp </p><p>/{nama} => cari pake nama (bisa nama lengkap/nama singkat) => bakal nge return array kalo ada yg sama namanya (lagian nama pasaran :v)</p><p>development on:<a href ="https://github.com/Marcellinom/database_tc20">https://github.com/Marcellinom/database_tc20</a> (tenang data kalian di encrypt) ;)</p>');
    })
})