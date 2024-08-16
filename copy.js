var fs = require("fs");
fs.readFile("sample.txt","utf8", readingComplete)

function readingComplete(error, data)
{
    if(error) console.log(error)
        else {
             fs.writeFile("india.txt",data,"utf8", writingComplete);
             function writingComplete(error2){
               if(error) console.log(error2);
                 else console.log("File Copy");
                            }
                                 }
}