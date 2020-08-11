module.exports = function(results){
  var attributes =[]
  for(var i in results){
    if(results[i].qty>20){
      attributes.push(results[i])
      
    }
  }
  return attributes
}

function findItemsOver(list, threshold){
  var attributes =[]
  for(var i in list){
    if(list[i].qty>threshold){
      attributes.push(list[i])
      
    }
  }
  return attributes
}