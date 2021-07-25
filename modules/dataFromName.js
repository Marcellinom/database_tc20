const data = require('./DataRead');

module.exports = {
    execute: (name) => {
        var final = [];
        data.forEach(d => {
            if(d.NAMA.toLowerCase().includes(name.toLowerCase()))
                final.push(d);
        });
        if(!final.length) return 404;
        return final;
    }
}