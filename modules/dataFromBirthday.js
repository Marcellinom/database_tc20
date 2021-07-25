const data = require('./DataRead');

module.exports = {
    execute: (bd) => {
        let cari = bd.split('-');
        var final = [];
        data.forEach( d => {
            let curr = d.TANGGAL_LAHIR.split('/');
            if(cari[0]+cari[1] == curr[0]+curr[1])
                final.push(d);
        });
        if(!final.length) return 404;
        return final;
    }
}