let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20' , function(){
  it('should return all the products that have a quantity higher than 20.' , function(){
    var attributes = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    ];
    assert.deepEqual(attributes, findItemsOver20(attributes, 25));
  });
  it('should return all the attributes that have a quantity higher than 20.' , function(){
    var attributes = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    ];
    assert.deepEqual(attributes, findItemsOver20(attributes, 21));
  });
  it('should return an error if my products have quantity less than 20.' , function(){
    var attributes = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    ];
    assert.deepEqual(attributes, findItemsOver20(attributes,11));
  });
});