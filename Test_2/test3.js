QUnit.test( 'Testing the area', function( assert ) {

assert.equal(myfunction(3),9,'Tested with two relatively small positive numbers');

assert.equal(myfunction(0),0,'Tested with side value 0');
assert.equal(myfunction(999887464544),0,'Tested with hours<0, result will be 0');
assert.equal(myfunction(-9),0,'Tested with side value 0.')



   // assert.ok( 4 == "input", "Passed!" );


  });