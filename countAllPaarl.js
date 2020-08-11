module.exports = function(regNo){
	var regNumber = regNo.split(", ")
	var paarl= [];
	for(var i =0;i<regNumber.length;i++){
		var currentValue=regNumber[i]
		if(currentValue.startsWith("CJ")){
			paarl.push(currentValue)   
		}
	}
	return paarl.length
}