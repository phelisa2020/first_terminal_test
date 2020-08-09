module.exports = function(priceShift){
if (priceShift == "morning"){
  return "R20"

}

 if (priceShift == "afternoon"){
   return "R10"
     
}
 if (priceShift == "nightshift"){
  return "free"

 }
}