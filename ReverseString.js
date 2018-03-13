/* Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/

function solution(str){
  const splitString = str.split("")
  const reverseArray = splitString.reverse()
  const joinArray = reverseArray.join("")
  return joinArray
}