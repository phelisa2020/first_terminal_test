let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck function' , function(){
	it('should return true for GP', function(){
		assert.equal(true,regCheck('DV 23 NB GP', 'GP'));
	});
	it('should return false for ND', function(){
		assert.equal(false,regCheck('CY189-012', 'ND'));
	});
});