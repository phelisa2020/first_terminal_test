let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('mostProfitableDepartment' , function(){
    it('should return -1 when the most profitable department is not present' , function(){ 
    	
      assert.equal([
    'hardware,outdoor,carpentry, hardware, outdoor,carpentry,hardware, outdoor,carpentry,hardware, outdoor,carpentry,hardware,outdoor,carpentry',
].indexOf(20), -1);
    });
       it('should return hardware for the first most profitable department', function(){
       		
      assert.equal(mostProfitableDepartment(([
    'hardware,outdoor,carpentry, hardware, outdoor,carpentry,hardware, outdoor,carpentry,hardware, outdoor,carpentry,hardware,outdoor,carpentry',
]),'hardware'), 0 );
    });
       
});
