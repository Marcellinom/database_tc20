const data = require('./DataRead');

module.exports = {
    execute: (nrp) => {
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
