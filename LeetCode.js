// 1 :-

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









//2 :-
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



// var expect = function(val) {
//     function toBe(n){
//         if(val===n){
//             return true
//         }
//         else{
//             throw new Error('Not Equal')
//         }
//     }
//     function notToBe(n){
//         if(val!==n){
//             return true
//         }else{
//             throw new Error('Equal')
//         }
//     }
//     return {
//         toBe,
//         notToBe
//     }
// };













//3 :-

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.



// var createCounter = function(n) {
    
//     return function() {
   
//    return n++;
//     };
// };












//4 :-

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

//     increment() increases the current value by 1 and then returns it.
//     decrement() reduces the current value by 1 and then returns it.
//     reset() sets the current value to init and then returns it.

 

// // Example 1:

// // Input: init = 5, calls = ["increment","reset","decrement"]
// // Output: [6,5,4]
// // Explanation:
// // const counter = createCounter(5);
// // counter.increment(); // 6
// // counter.reset(); // 5
// // counter.decrement(); // 4
// /**
//  * @param {integer} init
//  * @return { increment: Function, decrement: Function, reset: Function }
//  */
// var createCounter = function(init) {
//     let temp=init
//     function increment(){
//         return ++init
//     }
//     function decrement(){
//         return --init
//     }
//     function reset(){
//         init=temp
//         return init
//     }
//      return {
//         reset,decrement,increment
//     }
   


// };

// /**
//  * const counter = createCounter(5)
//  * counter.increment(); // 6
//  * counter.reset(); // 5
//  * counter.decrement(); // 4
//  */








//5:-
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42


// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function(arr, fn) {
//     var result=[]
//       for (let i = 0; i < arr.length; i++) {
         
//           result.push(fn(arr[i],i));
//       }
//      return result
//   };











//6:-
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

//     arr[i] - number from the arr
//     i - index of arr[i]

// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

 

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0

// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out

 
// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var filter = function(arr, fn) {
//     var result=[]
//     for (let i = 0; i < arr.length; i++) {
       
//           if (fn(arr[i], i)) {
//             result.push(arr[i]); 
//         }
//     }
//    return result
// };









//7:-
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

//     The first time the returned function is called, it should return the same result as fn.
//     Every subsequent time it is called, it should return undefined.

 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called

// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// var once = function(fn) {
//     c=0
//     return function(...args){
//         if(c==0){
//             c++;
//             return fn(...args)
//         }
       
//     }
// };

// /**
//  * let fn = (a,b,c) => (a + b + c)
//  * let onceFn = once(fn)
//  *
//  * onceFn(1,2,3); // 6
//  * onceFn(2,3,6); // returns undefined without calling fn
//  */














//8
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

 

// Example 1:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

// Example 2:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.


// /**
//  * @param {Promise} promise1
//  * @param {Promise} promise2
//  * @return {Promise}
//  */
// var addTwoPromises = async function(promise1, promise2) {
//     var a=await promise1
//     var b=await promise2
//     return a+b
// };

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */




















//9
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */
// Array.prototype.last = function() {
//     var l=this.length
//     if(l==0){
//         return -1
//     }else{
//         return this[l-1]
//     }
// };

// /**
//  * const arr = [1, 2, 3];
//  * arr.last(); // 3
//  */






//10
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     var a=x
//     var b=a.toString()
//  var result =0
//  for(let x=b.length-1;x>=0;x--){
//      result+=b[x]
//  }
 
    
//      return result==a
//  };









//11
// Editorial
// Editorial
// Solutions
// Solutions
// Submissions
// Submissions
// Code
// Testcase
// Test Result
// Test Result
// 13. Roman to Integer
// Solved
// Easy
// Topics
// Companies
// Hint

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     var result =0
//     for(let i=0;i<s.length;i++){
//         if(s[i]=="I"){
//             if(s[i+1]=="V"||s[i+1]=="X"){
//                 continue;
//             }else{
//             result+=1
//             }
           
//         }else if(s[i]=="V"){
//             if(s[i-1]=='I'){
//                result+=4 
//             }else{
//               result+=5
//             }
            
//         }else if(s[i]=="X"){
//             if(s[i+1]=="L"||s[i+1]=="C"){
//                 continue  ;
//             }else if(s[i-1]=='I'){
//                 result+=9
//             }else{
//                 result+=10
//             }
            
//         }else if(s[i]=="L"){
//             if(s[i-1]=='X'){
//                result+=40 
//             }else{
//                  result+=50
//             }
           
//         }else if(s[i]=="C"){
//             if(s[i+1]=="D"||s[i+1]=="M"){
//                 continue;
//             }else if(s[i-1]=='X'){
//                result+=90 
//             }else{
//                 result+=100
//             }
            
//         }else if(s[i]=="D"){
//             if(s[i-1]=='C'){
//                result+=400 
//             }else{
//                 result+=500
//             }
            
//         }else if(s[i]=="M"){
//             if(s[i-1]=="C"){
//                 result+=900
//             }else{
//                 result+=1000
//             }
            
//         }
//     }
//     return result
// };

 






//12
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// /**
//  * @param {number} x
//  * @param {number} n
//  * @return {number}
//  */
// var myPow = function(x, n) {
//     let r=Math.pow(x,n)
//     return r
// };




//13
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
// consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function(s) {
//     var m=s.split(" ")
// var result=''
// var a=[]
// for(let i=0;i<m.length;i++){
//     if(m[i].length==0){
//         continue;
//     }else{
//         a.push(m[i])
//     }
// }
// result=a[a.length-1]

// return result.length
// };

//14
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     var result=''
//  var char = [];
//  for (let i = 0; i < 26; i++) {
//      char.push(String.fromCharCode(97 + i));
//  }
//  for(let j=0;j<s.length;j++){
 
//  var a=char.includes(s[j].toLowerCase())
//  var b=Number(s[j])
//  if(a||!isNaN(b)){
//      result+=s[j].toLowerCase()
//  }
 
//  }
//  return result.split(' ').join('')==result.split(' ').join('').split('').reverse().join('')
//  };






//15
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(j!=i&&nums[i]+nums[j]==target){
                return Array(i,j)
            }
        }
        
    }
};