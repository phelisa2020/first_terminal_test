let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver' , function(){
    it('should return products that have quantity higher than the threshold.' , function(){
    var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
      assert.deepEqual(itemList, findItemsOver(itemList, 2));
    });
    it('should also return products if its 0.' , function(){
    var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
      assert.deepEqual(itemList, findItemsOver(itemList, 0));
    });

	     

	  });