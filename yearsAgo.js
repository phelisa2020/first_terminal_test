module.exports = function(year){
  var date = new Date()
  console.log(date.getFullYear() - year);
  return date.getFullYear() - year

}