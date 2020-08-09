let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber' , function(){
it('should returns 3 for CA 182736,CY 523519,CY 812328' , function(){
 var regNo = "CA 182736,CY 523519,CY 812328";
assert.equal(3, countRegNumber('CA 1827362,CY 5235192,CJ 812328'));
});

it('should returns 1 for CY 123-223' , function(){
 var regNo = "CA 182736";
assert.equal(1, countRegNumber('CY 123-223'));
});
});