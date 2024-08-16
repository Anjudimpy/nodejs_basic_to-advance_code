var fs = require("fs");
fs.unlink("india.txt",fileDeletionComplete);

function fileDeletionComplete(error){
    if(error) console.log(error)
        else console.log("File Deleted");
}