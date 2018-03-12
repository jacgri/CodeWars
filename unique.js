/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

Tests:
Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);
*/

function findUniq(arr) {
  let sortArr = arr.sort()
  let num1 = sortArr[0]
  let num2 = sortArr[sortArr.length-1]
  
  if (sortArr[1] === num1) {
  return num2
  } else {
  return num1
  }
}