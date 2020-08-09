module.exports = function(bills){
  console.log(bills)
 var totalBills = 0
console.log(totalBills)
var phoneBill = bills.split(", ")

  for(var i = 0; i < phoneBill.length;i++){
 console.log(phoneBill)
    if(phoneBill[i] === 'call'){
    totalBills += 2.75
      //console.log("call")
    }
     else if (phoneBill[i] === 'sms'){
     totalBills += 0.65
       console.log("sms")
    } 
  }
return "R" + totalBills.toFixed(2)
   
}