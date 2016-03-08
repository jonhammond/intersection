var intersection = require('./intersection');

describe('intersection', function() {

 it('test1', function() {
  var arr1 = [1,2,3,4,5];
  var arr2 = [1,4,4,3,5];
  expect(intersection(arr1, arr2)).toEqual([1,3,4,4,5]);
 });
});