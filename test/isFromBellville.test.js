let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville function' , function(){
    it('should return true for CY 12322' , function(){
      assert.equal(true,isFromBellville('CY 12322'));
    });
    it('should say false for other regNo' , function(){
      assert.equal(false,isFromBellville('CJ 123224'));
    });
      });

