var OCSV = function(){
	
}

OCSV.prototype.parse2Json = function(csv){
	var csvs = csv.split("\r\n");
	var title = csvs.shift();
	var titles = title.split(",");
	var csvtitle = {};
	titles.forEach(function(item,index){
		csvtitle[index] = item;
	});
	var result = [];
	while(csvs.length>0){
		var temp = csvs.shift();
		var content = temp.split(",");
		var _obj = {};
		content.forEach(function(item,index){
			_obj[csvtitle[index]] = item;
		});
		result.push(_obj);
	}
	return result;
}

OCSV.prototype.parse2Csv = function(array){
	
}

module.exports = exports = new OCSV;