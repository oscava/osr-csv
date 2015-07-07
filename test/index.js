var CSV = require("../");
var csv = new CSV();
//rename the key
csv.resetKey({
	"市场代码":"market",
	"合约代码":"code",
	"时间":"time",
	"持仓":"cc",
	"增仓":"zc",
	"成交额":"turnover",
	"成交量":"volume",
	"平仓":"pc",
	"开仓":"kc",
	"成交类型":"type",
	"方向":"direction",
	"买一价":"b1p",
	"卖一价":"s1p",
	"买一量":"b1v",
	"卖一量":"s1v"
})
var fs = require("fs");
var csvString = fs.readFileSync("./demo.csv","utf8").toString();
console.time("---");
var csvObject = csv.parse2Json(csvString);
console.log(csvObject);
console.timeEnd("---");