let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo' , function(){
	it('should say in 2000 that was 20 years ago' , function(){
		var year = new Date().getFullYear()-year;
		assert.equal(2000, yearsAgo(20));
	});

	it('should say in 2019 that was 1 year ago ' , function(){
		var year = new Date().getFullYear()-year;
		assert.equal(2019, yearsAgo(1));
	});
});