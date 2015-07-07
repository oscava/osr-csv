var OCSV = function(){
	this.mcsvtitle = {};
}

OCSV.prototype.resetKey = function(csvtitle){
	this.mcsvtitle = csvtitle;
}

OCSV.prototype.parse2Json = function(csv){
	var csvs = csv.split("\r\n");
	var title = csvs.shift();
	var titles = title.split(",");
	var csvtitle = {};
	var _this = this;
	titles.forEach(function(item,index){
		csvtitle[index] = item;
		if(!_this.mcsvtitle[item]){
			_this.mcsvtitle[item] = item;
		}
	});
	var result = [];
	while(csvs.length>0){
		var temp = csvs.shift();
		var content = temp.split(",");
		var _obj = {};
		content.forEach(function(item,index){
			_obj[_this.mcsvtitle[csvtitle[index]]] = item;
		});
		result.push(_obj);
	}
	return result;
}

OCSV.prototype.parse2Csv = function(array){
	
}

module.exports = exports = OCSV;