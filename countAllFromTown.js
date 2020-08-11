module.exports = function(regNo){
	var plates = regNo.split(",")
    var fromStellies = []
    
    for(var i = 0; i < plates.length; i++){
    	var plate = plates[i]
        if(plate.startsWith("CL")){
           		fromStellies.push(plate)
           }
    }
  
return fromStellies.length
}
