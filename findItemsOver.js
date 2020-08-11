module.exports = function(list, threshold){
	var attributes =[]
	for(var i in list){
		if(list[i].qty>threshold){
			attributes.push(list[i])
			
		}
	}
	return attributes
}
