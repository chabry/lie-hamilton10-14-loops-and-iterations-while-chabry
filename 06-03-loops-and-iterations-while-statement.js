// whileStatement.js

// Function 1
function sumOfSquares(n) {
  // Implement a function to calculate the sum of squares of numbers from 1 to 'n'.   
  let i = 1
  let sum = 0

  while(i <= n){
    sum += Math.pow(i, 2)
    i++
  }
  return sum
}

// Function 2
function printReverseArray(arr) {
  // Your code here
  let i = arr.length - 1

  while(i >= 0){
    console.log(arr[i])
    i--
  }
}

// Function 3
function reverseString(str) {
  //Implement a function to reverse the given string.
  let reverseString = ''
  let i = str.length - 1

  while(i >= 0){
    reverseString += str[i]
    i--
  }

  return reverseString
}

// Function 4
function findMax(arr) {
  //Implement a function to find the maximum number in the given array.
  let maxNumber = arr[0]
  let i = 0

  while(i < arr.length){
    if(arr[i] > maxNumber){
      maxNumber = arr[i]
    }
    i++
  }

  return maxNumber

}

module.exports = {
  sumOfSquares,
  printReverseArray,
  reverseString,
  findMax,
};
