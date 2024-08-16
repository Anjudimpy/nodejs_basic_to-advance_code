var fs = require("fs");
fs.readFile("sample.txt","utf8",reciveFileContent);

 function reciveFileContent(error, data){
    if(error) console.log(error);
    else console.log(data);
 }
 console.log("done");