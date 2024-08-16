var fs = require("fs");
fs.readdir("D:\\nodejs\\india",readdirCompleted);
function readdirCompleted(error, files){
    if(error) console.log(error);
        else
        {
  // console.log(files);
  for(var i=0; i<files.length; i++){
     console.log(files[i]);
     console.log(((files[i].indexOf(".")>0)?"file":"folder"));
  }
        }
      
}