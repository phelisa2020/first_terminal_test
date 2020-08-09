module.exports = function(regNo){
  console.log(regNo)
  var regNumber = regNo.split(", ")
  console.log(regNumber)
var paarl= [];
  for(var i =0;i<regNumber.length;i++){
    var currentValue=regNumber[i]
    
   if(currentValue.startsWith("CJ")){
       paarl.push(currentValue)
       
   }
  
  }
  
return paarl.length
}