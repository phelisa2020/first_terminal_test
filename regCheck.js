module.exports = function(regNo ,loc){
  var regPlate = regNo.endsWith(loc);
  return regPlate;
}