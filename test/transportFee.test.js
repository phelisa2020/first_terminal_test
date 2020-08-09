let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee function' , function(){
    it('should say in the morning the transportFee is R20' , function(){
    	var returns = "R20";
      assert.equal(returns,transportFee("morning"));
    });
    it('should say in the afternoon the transportFee is R10', function(){
    	var returns = "R10";
      assert.equal(returns, transportFee("afternoon"));
    });
    it('should returns free when its a nightshift.', function(){
    	var returns = "free"
      assert.equal(returns, transportFee("nightshift"));
    });
});
