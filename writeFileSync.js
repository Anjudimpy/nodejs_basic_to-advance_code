var fs = require("fs");
var content="India is one of the countries in Asia";
fs.writeFileSync("india.txt",content,"utf8");
console.log("done");