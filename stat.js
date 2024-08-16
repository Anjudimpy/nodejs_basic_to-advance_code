//File Details

var fs = require("fs");
fs.stat("sample.txt", StatReadingCompleted);

function StatReadingCompleted(error, stats){
    if(error) console.log(error);
        else console.log(stats);
}