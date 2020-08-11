let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function' , function(){
	it('should return 3 regNos for paarl' , function(){
		assert.equal(3, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
	});
	it('should return none if the number of regNos for paarl is not available' , function(){
		assert.equal(0, countAllPaarl("CL 123-546, CK 345,"));
	});
});
