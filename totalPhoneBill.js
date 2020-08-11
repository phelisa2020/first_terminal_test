module.exports = function(bills){
 var totalBills = 0
 var phoneBill = bills.split(", ")

  for(var i = 0; i < phoneBill.length;i++){
    if(phoneBill[i] === 'call'){
    totalBills += 2.75
    }
     else if (phoneBill[i] === 'sms'){
     totalBills += 0.65
  
    } 
  }
return "R" + totalBills.toFixed(2)
   
}