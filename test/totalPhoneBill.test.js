let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill' , function(){
	it('should say R7.45 for 2 calls and 3 sms' , function(){
		assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
	});
	it('should say R1.95 for sms only' , function(){
		assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
	});
});
