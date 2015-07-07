var csv = require("../");
var fs = require("fs");
var csvString = fs.readFileSync("./demo.csv").toString();
console.time("---");
var csvObject = csv.parse2Json(csvString);
// console.log(csvObject);
console.timeEnd("---");