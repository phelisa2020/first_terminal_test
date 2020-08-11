module.exports = function(regNo,loc){
	var plates = regNo.split(",")
	var fromStellies = []
	
	for(var i = 0; i < plates.length; i++){
		var plate = plates[i].trim()
		if(plate.startsWith(loc)){
			fromStellies.push(plate)
		}
	}
	
	return fromStellies.length
}
