var fs = require("fs");
var content="India is one of the countries in Asia";
fs.writeFile("india.txt",content,"utf8", fileWriteComplete);

function fileWriteComplete(error){
    if(error) console.log(error);
    else console.log("FileWriteComplete"); 
}

console.log("done");