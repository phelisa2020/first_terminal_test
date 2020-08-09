module.exports = function mostProfitableDepartment(salesData){
  var highSales= 0;
  var depart='';
  
  
  for (let i=0; i<salesData.length; i++){
    var sales = salesData[i].sales;
    var deep = salesData[i].department
 
  if(sales > highSales){
     highSales=sales;
    depart= deep;
      
  }
}
  return depart;

};


function mostProfitableDay(salesData){
var highSales=0;
  var day= {};
  var day2={};
  
  for (let i=0 ;i<salesData.length; i++){
    var index = salesData[i];
    console.log(index)
    if (day[index.day] === undefined){
    day[index.day]=0;
    }
    day[index.day]=day[index.day]+index.sales;
  }
  for(var inSide in day){
    if(day[inSide]>=highSales){
       highSales=day[inSide]
       day2 = inSide
       
  }
  }
       console.log(highSales)
       console.log(day2)
return day2;
}