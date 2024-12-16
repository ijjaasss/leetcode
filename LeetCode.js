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

 

// // Example 1:

// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums.length;j++){
//             if(j!=i&&nums[i]+nums[j]==target){
//                 return Array(i,j)
//             }
//         }
        
//     }
// };













//16
// Given two strings s and t, return true if t is an
// anagram
// of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var a=s.split("")
 var b=t.split("")
 return a.sort().join('')==b.sort().join('')
};








//17
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function(num1, num2) {
//     var a= BigInt(num1)+BigInt(num2)
//     var str =`${a}`
//     return str
// };


//18
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:
// Input: s = "Mr Ding"
// Output: "rM gniD"

/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     var arr=s.split(' ')
//  var result=[]
// for(let i=0;i<arr.length;i++){
//     result.push(arr[i].split('').reverse().join(''))
// }
// return result.join(' ')
    
// };



//19

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// // Example 1:

// // Input: s = "abcdefg", k = 2
// // Output: "bacdfeg"

// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// var reverseStr = function(s, k) {
//     var c=1
// var result=''
// for(let i=0;i<s.length;i+=k){
// if(c==1){
//     result+=s.split('').splice(i,k).reverse().join('')
//     c=2

// }else if(c==2){
//     result+=s.split('').splice(i,k).join('')
//     c=1
// }


// }
// return result
    
// };












//20
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//     var a=digits.join('')
//     a=BigInt(a)+BigInt(1)
//     a=a.toString()
//     var result=[]
//     for(let i=0;i<a.length;i++){
//        result.push(Number(a[i]))
        
//     }
//     return result
//     };







// //21
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// // Output: "leotcede"

//  /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function(s) {
//    if(s.toLowerCase().includes('a')||s.toLowerCase().includes('e')||s.toLowerCase().includes('i')||s.toLowerCase().includes('o')||s.toLowerCase().includes('u')){

   
// }else{
// return s
   
// }
//  var arr=s.split('')
// var result=[]
// for(let i=0;i<arr.length;i++){
//   if(arr[i].toLowerCase()=='a'||arr[i].toLowerCase()=='e'||arr[i].toLowerCase()=='i'||arr[i].toLowerCase()=='o'||arr[i].toLowerCase()=='u'){
//    result.push(arr[i])
//  arr[i]=' '
// }

// }
// result.reverse()
// var l=0
// for(let j=0;j<arr.length;j++){
//   if(arr[j]==' '&&s[j]!=' '){
//    arr[j]=result[l]
//    l++
//   }
   
// }
// return arr.join('')
// };





//22
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// // Example 1:

// // Input: nums = [2,2,3,2]
// // Output: 3
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//   for(let i=0;i<nums.length;i++){
//    var flag=0
//    for(let j=0;j<nums.length;j++){
//        if(i!=j&&nums[i]==nums[j]){
//                flag++
//                break
//        }
//    }
//   if(flag==0){
//   return nums[i]
   
//   }
   
// }

// };


//23
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// /**
//  * @param {string} num
//  * @return {string}
//  */
// var largestOddNumber = function(num) {
    
//   var result = "";
//   var l = -1; 
  
//   for (let i = num.length - 1; i >= 0; i--) {
//       if (parseInt(num[i]) % 2 !== 0) {
//           l = i; 
//           break; 
//       }
//   }
  
//   if (l !== -1) { 
//       result += num.slice(0, l + 1); 
//   }
//   return result
//   };





// //24
// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

//     It is a substring of num with length 3.
//     It consists of only one unique digit.

// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

//     A substring is a contiguous sequence of characters within a string.
//     There may be leading zeroes in num or a good integer.

 

// Example 1:

// Input: num = "6777133339"
// Output: "777"
// Explanation: There are two distinct good integers: "777" and "333".
// "777" is the largest, so we return "777".

// Example 2:

// Input: num = "2300019"
// Output: "000"
// Explanation: "000" is the only good integer.

// Example 3:

// Input: num = "42352338"
// Output: ""
// Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.








//25
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var sumOfUnique = function(nums) {
//     var res=[]
// for(let i=0;i<nums.length;i++){
//     var flag=0
//     for(let j=0;j<nums.length;j++){
//         if(i!=j&&nums[i]==nums[j]){
//             flag++;
//             break;
//         }
//     }
//    if(flag==0){
//     res.push(nums[i])
//    }
    
// }
// var sum=res.reduce((acc,val)=>acc+val,0)
// return sum
// };






//26
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var j=0
    
 for(let i=0;i<nums.length;i++){
 
 if(nums[i]!=val){
    nums[j]=nums[i]
    j++
  
 }
 }
return j
};




// //27
// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

// To separate the digits of an integer is to get all the digits it has in the same order.

//     For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

 

// Example 1:

// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
   return nums.join('').split('').map((val)=>Number(val))
};


//28
// You are given a positive integer n. Each digit of n has a sign according to the following rules:

//     The most significant digit is assigned a positive sign.
//     Each other digit has an opposite sign to its adjacent digits.

// Return the sum of all digits with their corresponding sign.

 

// Example 1:

// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.

// Example 2:

// Input: n = 111
// Output: 1
// Explanation: (+1) + (-1) + (+1) = 1.
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
   var num=n.toString()
var tem=true
var sum=0
for(let i=0;i<num.length;i++){
 if(tem){
  sum+=Number(num[i])
  tem=!tem
 }else{
   sum-=Number(num[i])
   tem=!tem
 }
}
return sum
};


//28
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   var n=num.toString()
   var sum=0
for(let i=0;i<Number(n[0]);i+=0){
   sum=n.split('').reduce((acc,val)=>acc+Number(val),0)

   if(sum.toString().length==1){
       break;
       
   }else{
       n=sum.toString()
      
   }



}
return sum
};




//28
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
   var res=[]

 for(let i=0;i<matrix[0].length;i++){
     var temp=[]
   for(let j=0;j<matrix.length;j++){
         temp.push(matrix[j][i])
   }
   res.push(temp)
   
 }
 return res
};



//29
// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Input: mat = [[1,2,3],
// [4,5,6],
// [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// // Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8


/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
   var c=0
var l=mat[0].length-1

var res=[]
for(let i=0;i<mat.length;i++){
   

if(l!=c){
   res.push(mat[i][c])
   res.push(mat[i][l])
}else {
res.push(mat[i][l])
}
   l--;

   c++
}
var sum=res.reduce((acc,val)=>acc+val,0)
return sum


};














// //30
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
   if(board.length!=9){
   return false
}

   var eq=[[],[],[]]

for(let i=0;i<board.length;i++){
   var l=0
   for(let j=0;j<3;j++){
       var t=board[i].slice(l,l+3)
       if(l==0){
           eq[0].push(t)
       }else if(l==3){
           eq[1].push(t)
       }
       else if(l==6){
           eq[2].push(t)
       }
      
       l+=3
   }

   if(eq[1].length==3){ 
      var t=eq[1].flat().filter((val)=>Number(val))
      var n=[...new Set(t)]
      if(t.length!=n.length){
       return false
      }
       eq[1]=[]
   }
   if(eq[0].length==3){ 

       
      var t=eq[0].flat().filter((val)=>Number(val))
      var n=[...new Set(t)]
      if(t.length!=n.length){
       return false
      }
       eq[0]=[]
   }
   if(eq[2].length==3){ 

       
var t=eq[2].flat().filter((val)=>Number(val))
var n=[...new Set(t)]
if(t.length!=n.length){
return false
}
eq[2]=[]
}
   

  
  
   
}
       
for(let i=0;i<board.length;i++){
   if(board[i].length!=9){
   return false
}
   var res=[]
  var t=board[i].filter((val,index)=>Number(val))
 
  
  var n=[...new Set(t)]
   if(n.length!==t.length){
       return false
       
   }
   for(let j=0;j<board.length;j++){
       
       res.push(board[j][i])  
      
   }
   var t=res.filter((val,index)=>Number(val))
   var n=[...new Set(t)]
if(t.length!==n.length){
   return false
   
}
  
   
}
return true

};




//31
// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

 

// Example 1:

// Input: nums = [-4,-2,1,4,8]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
   nums=nums.sort((a,b)=>a-b)
var po=nums.filter((val)=>val>0)
var ne=nums.filter((val)=>val<0)
var zero=nums.includes(0)


if(zero){
  return 0
  
} else if(po.length==0){
   return ne[ne.length-1]
   
}else if(ne.length==0){
   return po[0]
   
}else if(Math.abs(ne[ne.length-1])==po[0]){
   return po[0]
   
}else if(po[0]<Math.abs(ne[ne.length-1])){
return po[0]

}else{
   return ne[ne.length-1]
   
}

};




//32
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

 

// Example 1:

// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
   var str=''
  if(n%2!=0){
   str=str.padStart(n,'a')
  }else{
   str=str.padStart(n-1,'a')
   str+='b'
  }
  return str
};


//33
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
   var c=0
   for(let i=low;i<=high;i++){
       if(i%2!=0){
           c++
       }
   }
   return c
};


//34
// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
   var res=[]
var l=arr.length/2
l=Math.ceil(l)

for(let i=1;i<=arr.length;i+=2){
   var c=i
   for(let j=0;j<arr.length;j++){
       var temp=arr.slice(j,c)
       c++
       
      
      if(temp.length!==i){
       break
      }
     res.push(temp)
      
       
   }
   
}
res=res.flat()
var sum=res.reduce((acc,val)=>acc+val,0)

return sum
};







//35
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   var res=[]
      for(let i=0;i<nums.length;i+=0){
         var a=Math.min(...nums)
         var b=nums.indexOf(a)
         nums.splice(b,1)
         res.push(a)
      }
  for(let i=0;i<res.length;i++){
      nums[i]=res[i]
  }
  };



  //36
//   Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
   var notarray=arr1.filter((val)=>!arr2.includes(val)).sort((a,b)=>a-b)

var res=[]
for(let i=0;i<arr2.length;i++){
   for(let j=0;j<arr1.length;j++){
       if(arr2[i]==arr1[j]){
           res.push(arr1[j])
       }
   }
}
res.push(notarray)
res=res.flat(Infinity)

return res
};



//37
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

 

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   var res=[]
for(let i=0;i<heights.length;i++){
   var a=Math.max(...heights)
   var b=heights.indexOf(a)
   heights[b]=0
res.push(names[b])
 
}
return res
};



// //38
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

//     For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".

// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
   
   var num=s.split('')
   s=s.split(' ')
   num=num.filter((val)=>Number(val))
   var res=[]
   for(let i=0;i<s.length;i++){
      var a= s[i].split('').filter((val)=>!Number(val)).join('')
      res[Number(num[i]-1)]=a
     
       
   }
   return res.join(' ')
   
   };



   //39
//    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   var l=0
   for(let i=0;i<nums1.length;i++){
       if(i>=m){
           nums1[i]=nums2[l]
           l++
       }

   }
   nums1=nums1.sort((a,b)=>a-b)
};


//40
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   var ss=s.split('').sort()
  var tt=t.split('').sort()
  var res=''
  for(let i=0;i<tt.length;i++){
     if(tt[i]!=ss[i]){
     res=tt[i]
     break;
      
     }
  }
  return res
  };



  //41
//   Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

 

// Example 1:

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:

// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
   nums=nums.sort((a,b)=>a-b)

var num=[]
for(let i=0;i<nums.length;i+=2){
   num.push(Array(nums[i],nums[i+1]))
 
}
var res=[]
for(let i=0;i<num.length;i++){
res.push(Math.min(...num[i]))
if(i<num.length-1){
   res.push(`+`)
}


}
res=res.join('')
return eval(res)

};



//42
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

 

// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
   var arr=[]
for(let i=0;i<s.length;i++){
   if(s[i+1]){
       var a=Math.abs(s[i].charCodeAt()-s[i+1].charCodeAt())
       arr.push(a)
   }
   
}
var sum=arr.reduce((acc,val)=>acc+val,0)
return sum
};


//43
// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
   var result=[]
for(let i=0;i<words.length;i++){
   var flag=0
   for(let j=0;j<words.length;j++){
       if(words[j].includes(words[i])&&i!=j){
           flag++
           break;
       }
   }
   if(flag==1){
       result.push(words[i])
       
   }
}
return result
};


//44
// You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. Each space should be inserted before the character at the given index.

//     For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".

// Return the modified string after the spaces have been added.

 

// Example 1:

// Input: s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]
// Output: "Leetcode Helps Me Learn"
// Explanation: 
// The indices 8, 13, and 15 correspond to the underlined characters in "LeetcodeHelpsMeLearn".
// We then place spaces before those characters.

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
   var res=''
var l=0
for(let i=0;i<s.length;i++){
 if(spaces[l]==i){
   res+=' '
   l++
   i--
 } else{
   res+=s[i]
 } 
}
return res
};


//45
// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

//     A triangle is called equilateral if it has all sides of equal length.
//     A triangle is called isosceles if it has exactly two sides of equal length.
//     A triangle is called scalene if all its sides are of different lengths.

// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

 

// Example 1:

// Input: nums = [3,3,3]
// Output: "equilateral"
// Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.

// Example 2:

// Input: nums = [3,4,5]
// Output: "scalene"

/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
   var triangle =['equilateral','isosceles','scalene','none']
if(nums[1]+nums[2]<=nums[0]||nums[0]+nums[1]<=nums[2]||nums[0]+nums[2]<=nums[1]){
   return triangle[3]
   
}else if(nums[0]==nums[1]&&nums[1]==nums[2]&&nums[0]==nums[2]){
   return triangle[0]
   
}else if(nums[0]==nums[1]&&nums[1]!=nums[2]||nums[0]==nums[2]&&nums[1]!=nums[2]||nums[2]==nums[1]&&nums[1]!=nums[0]){
return triangle[1]

}else{
   return triangle[2]
   
}
};

//46
// Given an array of strings strs, group the
// anagrams
// together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var arr=strs.map((val)=>val.split('').sort().join(''))
var a=[...new Set(arr)]
var res=[]
for(let i=0;i<a.length;i++){
    var temp=[]
    for(let j=0;j<arr.length;j++){
        if(a[i]==arr[j]){
            temp.push(strs[j])
        }
    }
   res.push(temp.sort())
    
}
return res.reverse()

};

//47
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   var t=n

for(let i=0;i<t;i++){
   var sum=0
   var str=t.toString()
   for(let j=0;j<str.length;j++){
  sum+=Number(str[j])**2
   }
   t=sum
  if(sum==1){
   return true
  }

}
return false
};



//48

// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
   var date = new Date(`${year}-${month}-${day}`).toDateString().split(' ')[0]


var weaks={
 'Sun':"Sunday",
 "Mon":'Monday',
 'Tue':'Tuesday',
 'Wed':'Wednesday',
 'Thu':'Thursday',
  'Fri':'Friday',
  'Sat':'Saturday'
}
return weaks[date]
};



//49
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

 

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
   var result=[]
   for(let i=0;i<words.length;i++){
       if(words[i].includes(x)){
           result.push(i)
       }
   }
return result
};


//50
// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

// Example 1:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
   nums=nums.sort((a,b)=>a-b)
var m=nums.map((val,ind)=>val==target?ind:'non')
var result=m.filter((val)=>val!='non')
return result
};


//51
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   var result=[-1,-1]
var f=nums.indexOf(target)
var l=nums.lastIndexOf(target)

   result[0]=f
   result[1]=l

return result
};


//52
// You are given a string num consisting of only digits. A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.

// Return true if num is balanced, otherwise return false.

 

// Example 1:

// Input: num = "1234"

// Output: false

// Explanation:

//     The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
//     Since 4 is not equal to 6, num is not balanced.

// Example 2:

// Input: num = "24123"

// Output: true

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
   var sum1=0
var sum2=0
for(let i=0;i<num.length;i++){
   if(i%2==0){
       sum1+=Number(num[i])
       
   }else{
       sum2+=Number(num[i])
   }
}
return sum1==sum2
};


//53

// You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key. For example, s = "ab" has a change of a key while s = "bBBb" does not have any.

// Return the number of times the user had to change the key. 
// Note: Modifiers like shift or caps lock won't be counted in changing the key that is if a user typed the letter 'a' and then the letter 'A' then it will not be considered as a changing of key.

 

// Example 1:

// Input: s = "aAbBcC"
// Output: 2

/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
   var count=0
for(let i=0;i<s.length-1;i++){
if(s[i].toLowerCase()!==s[i+1].toLowerCase()){
   count++
}
}
return count
};



//54
// You are given a 0-indexed integer array nums whose length is a power of 2.

// Apply the following algorithm on nums:

//     Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
//     For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
//     For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
//     Replace the array nums with newNums.
//     Repeat the entire process starting from step 1.

// Return the last number that remains in nums after applying the algorithm.

 

// Example 1:

// Input: nums = [1,3,5,2,4,8,2,2]
// Output: 1


/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
   if(nums.length==1){
       return Number(nums)
   }
      var c=1
  var result;
      for(let i=0;i<nums.length/2;i+=0){
       var temp=[]
      for(let j=0;j<nums.length;j++){
       if(j%2!=0){
    if(c%2!=0){
         temp.push(Math.min(nums[j],nums[j-1]))
         c++
    }else{
        temp.push(Math.max(nums[j],nums[j-1]))
        c++
    }
   }
      }
  
     nums=temp 
 
   if(nums.length!=0){
       result=nums
   }
      
     
      }
      
    return Number(result)
};




//55
// Reversing an integer means to reverse all its digits.

//     For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.

// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

// Example 1:

// Input: num = 526
// Output: true

// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
   var n=num.toString()
var a=num.toString()
a=a.split('').reverse().join('')
a=parseInt(a).toString().split('').reverse().join('')

return n==a
};


//56
// You are given an array nums consisting of positive integers.

// You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

// Return the number of distinct integers in the final array.

 

// Example 1:

// Input: nums = [1,13,10,12,31]
// Output: 6

// Example 2:
// Input: nums = [2,2,2]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
   var arr=[]
for(let i=0;i<nums.length;i++){
 var a=nums[i].toString().split('').reverse().join('')
arr.push(parseInt(a))
}
nums.push(arr)
nums=nums.flat(Infinity)
var a=[...new Set(nums)]
return a.length
};


//57
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

//     For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".

// Return the resulting string.

 

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".


// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
   if(word.includes(ch)){
   var a=word.slice(0,word.indexOf(ch)+1)
   a=a.split('').reverse().join('')+word.slice(word.indexOf(ch)+1)
return a
}else{
  return word
   
}
};


//58
// You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

// date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

// Return the binary representation of date.

 

// Example 1:

// Input: date = "2080-02-29"

// Output: "100000100000-10-11101"

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
   var n=date.split('-')
var m=n.map((val)=>parseInt(val).toString(2))
return m.join('-')
};



//59
// Given a positive integer n, write a function that returns the number of
// set bits
// in its binary representation (also known as the Hamming weight).

 

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.


/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
   var a=n.toString(2).split('')
var b=a.filter((val)=>parseInt(val))
return b.length
};


//60
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8


// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
   var a=grid.flat(Infinity)
   a=a.filter((val)=>val<0)
   return a.length
};



//61
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   for(let i=97;i<=122;i++){
  if(!sentence.includes(String.fromCharCode(i))){
return false

  }
   
}
return true
};


//62
// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

//     ruleKey == "type" and ruleValue == typei.
//     ruleKey == "color" and ruleValue == colori.
//     ruleKey == "name" and ruleValue == namei.

// Return the number of items that match the given rule.

 

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1


/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
   var a=["type", "color", "name"]
a=a.indexOf(ruleKey)
var result=[]
for(let i=0;i<items.length;i++){
   if(items[i][a]==ruleValue){
result.push(items[i])
   }
}
return result.length
};


//63
// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

//     s[i] == 'I' if perm[i] < perm[i + 1], and
//     s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 

// Example 1:

// Input: s = "IDID"
// Output: [0,4,1,3,2]

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
   var m=0
var d=s.length
var arr=[]
for(let i=0;i<s.length;i++){
   if(s[i]=='I'){
       arr.push(m++)
   }else{
       arr.push(d--)
   }
}

for(let i=0;i<=s.length;i++){
  if(!arr.includes(i)){
arr.push(i)
  }
}
return arr

};



//64
// Given a 0-indexed m x n integer matrix matrix, create a new 0-indexed matrix called answer. Make answer equal to matrix, then replace each element with the value -1 with the maximum element in its respective column.

// Return the matrix answer.
// Input: matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
// Output: [[1,2,9],[4,8,6],[7,8,9]]

// Input: matrix = [[3,-1],[5,2]]
// Output: [[3,2],[5,2]]

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
   for(let i=0;i<matrix.length;i++){
  
   for(let j=0;j<matrix[i].length;j++){
    if(matrix[i][j]<0){
       var arr=[]
       for(let k=0;k<matrix.length;k++){
      arr.push(matrix[k][j])
       }
       matrix[i][j]=Math.max(...arr)
       
    }
   }
}
return matrix
};


//65
// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

//     Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
//     Add the maximum of deleted elements to the answer.

// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.
// Input: grid = [[1,2,4],[3,3,1]]
// Output: 8
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
// - In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
// - In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
// The final answer = 4 + 3 + 1 = 8.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
   var arr=[]
for(let i=0;i<grid[0].length;i+=0){
   var temp=[]
   for(let j=0;j<grid.length;j++){
 temp.push(Math.max(...grid[j]))
 var a=grid[j].indexOf(Math.max(...grid[j]))
grid[j].splice(a,1)
 
   }

   
arr.push(Math.max(...temp))
   
}

var sum = arr.reduce((acc,val)=>acc+val,0)
return sum
};


//66
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
   var a=letters.filter((val)=>val.charCodeAt()>target.charCodeAt())
   if(a.length==0){
       var a=letters.filter((val)=>val!=target)
      
   }
   return a[0]
   };

   //67
//    You are given a positive number n.

// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only
// set bits

 

// Example 1:

// Input: n = 5

// Output: 7

// Explanation:

// The binary representation of 7 is "111".

/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
   var a=n.toString(2).split('')
a=a.map((val)=>val='1')
a=a.join('')
return parseInt(a,2)
};


//68
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   var arr=[]
 for(let i=0;i<nums.length;i++){
     var count=0
     for(let j=0;j<nums.length;j++){
         if(nums[i]>nums[j]){
             count++
         }
     }
     arr.push(count)
 }
 return arr
 };


 //69
//  A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
   var a=Math.max(...nums)
   return nums.indexOf(a)
};




//70
// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

 

// Example 1:

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".

// Example 2:

// Input: num = "123"
// Output: "123"

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
   var a=num.split('').reverse().join('')
a=BigInt(a)
a=a.toString().split('').reverse().join('')
return a

};

//71
// You are given a string s consisting of lowercase English letters, and an integer k. Your task is to convert the string into an integer by a special process, and then transform it by summing its digits repeatedly k times. More specifically, perform the following steps:

//     Convert s into an integer by replacing each letter with its position in the alphabet (i.e. replace 'a' with 1, 'b' with 2, ..., 'z' with 26).
//     Transform the integer by replacing it with the sum of its digits.
//     Repeat the transform operation (step 2) k times in total.

// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

//     Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
//     Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
//     Transform #2: 17 ➝ 1 + 7 ➝ 8

// Return the resulting integer after performing the operations described above.

 

// Example 1:

// Input: s = "iiii", k = 1

// Output: 36

// Explanation:

// The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.

// Example 2:

// Input: s = "leetcode", k = 2

// Output: 6

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
   var arr=s.split('').map((val)=>val.charCodeAt()-96)
   arr=arr.join('').split('').map((val)=>Number(val))
var sum=0
for(let i=0;i<k;i++){
  sum=arr.reduce((acc,val)=>acc+val,0)
  arr=sum.toString().split('').map((val)=>Number(val))
 
}
return sum
console.log(sum);
};


//72
// You are given an integer array nums, an integer k, and an integer multiplier.

// You need to perform k operations on nums. In each operation:

//     Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
//     Replace the selected minimum value x with x * multiplier.

// Return an integer array denoting the final state of nums after performing all k operations.

 

// Example 1:

// Input: nums = [2,1,3,5,6], k = 5, multiplier = 2

// Output: [8,4,6,5,6]

// Explanation:
// Operation	Result
// After operation 1	[2, 2, 3, 5, 6]
// After operation 2	[4, 2, 3, 5, 6]
// After operation 3	[4, 4, 3, 5, 6]
// After operation 4	[4, 4, 6, 5, 6]
// After operation 5	[8, 4, 6, 5, 6]


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
   for(let  i=1;i<=k;i++){
   var small=Math.min(...nums)
   var ind=nums.indexOf(small)
   nums[ind]=nums[ind]*multiplier
 
}
return nums
};



//73
// In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

// As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

 

// Example 1:

// Input: nums = [0,1,1,0]

// Output: [0,1]

// Explanation:

// The numbers 0 and 1 each appear twice in the array.

// Example 2:

// Input: nums = [0,3,2,1,3,2]

// Output: [2,3]

// Explanation:

// The numbers 2 and 3 each appear twice in the array.

// Example 3:

// Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]

// Output: [4,5]

// Explanation:

// The numbers 4 and 5 each appear twice in the array.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
   var n=nums.filter((val,ind)=>nums.indexOf(val)!=ind)
   return n
};


//74
// You are given an integer array nums.

// You replace each element in nums with the sum of its digits.

// Return the minimum element in nums after all replacements.

 

// Example 1:

// Input: nums = [10,12,13,14]

// Output: 1

// Explanation:

// nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: 1

// Explanation:

// nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.
/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
   var arr=[]
for(let i=0;i<nums.length;i++){
   var a=nums[i].toString()
   var sum=a.split('').reduce((acc,val)=>acc+Number(val),0)
  arr.push(sum)
   
}
return Math.min(...arr)
};


//75
// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

 

// Example 1:

// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

// Example 2:

// Input: n = 10
// Output: 40
// Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.

// Example 3:

// Input: n = 9
// Output: 30
// Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
   var sum=0
   for(let i=3;i<=n;i++){
if(i%3==0||i%5==0||i%7==0){
   sum+=i
}
   }
   return sum
};

//76
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   var sum=0
var arr=[]
for(let i=0;i<nums.length;i++){
  sum+=nums[i]
  arr.push(sum)
}
return arr
};

//76
// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

//     answer.length == nums.length.
//     answer[i] = |leftSum[i] - rightSum[i]|.

// Where:

//     leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
//     rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.

// Return the array answer.

 

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
   var left=[]
var right=[]
var suml=0
var sumr=0
var l=nums.length-1
for(let i=0;i<nums.length;i++){
  left.push(suml)
  suml+=nums[i]
  right.push(sumr)
  sumr+=nums[l]
  l--
}

right.reverse()
var res=[]
for(let i=0;i<nums.length;i++){
   var sum=left[i]-right[i]
  
   res.push(Math.abs(sum))    
}
return res
};