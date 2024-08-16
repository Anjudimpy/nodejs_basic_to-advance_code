var fs = require("fs");
fs.rename("india.txt","RepublicOfIndia",renameComplete);
function renameComplete(error){
    if(error) console.log(error);
    else console.log("Rename");
}