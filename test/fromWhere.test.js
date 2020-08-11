let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere function' , function(){
  it('should say Bellville if the regNo plate starts with CA..' , function(){
   var returns = 'Bellville';
   assert.equal(returns,fromWhere('CY'));
 });
  it('should say the Paarl if the regNo plate starts with CJ.' , function(){
   var returns ='Paarl';
   assert.equal(returns,fromWhere("CJ"));
 });
  it('should say Cape Town if the regNo plate starts with CA. .' , function(){
   var returns ='Cape Town'
   assert.equal(returns,fromWhere('CA'));
 });
  it('otherwise return Some other place!.' , function(){
   var returns ='Some other place!'
   assert.equal(returns,fromWhere('CD'));
 });
});