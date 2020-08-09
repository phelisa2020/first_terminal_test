let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){
	it('should say Monday is a is weekday' , function(){
      assert.equal(true, isWeekday('Monday'));
    });
    it('should say Saturday is not a weekday' , function(){
      assert.equal(false, isWeekday('Saturday'));
    });
       

});