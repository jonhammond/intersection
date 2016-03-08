function intersection (array1, array2) {
  var newArr = [];
  for (var i=0; i<array1.length; i++) {
    for (var n=0; n<array2.length; n++) {
      if (array1[i] === array2[n]) {
        newArr.push(array1[i]);
      }
    }
  }
  console.log(newArr);
  return newArr;
}

module.exports = intersection;