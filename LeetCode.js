// 1. 

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 1
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// var flat = function (arr, n) {
//     var newArray=arr.flat(n)
//     return newArray
// };





//2
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//     toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//     notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.



var expect = function(val) {
    function toBe(n){
        if(val===n){
            return true
        }
        else{
            throw new Error('Not Equal')
        }
    }
    function notToBe(n){
        if(val!==n){
            return true
        }else{
            throw new Error('Equal')
        }
    }
    return {
        toBe,
        notToBe
    }
};