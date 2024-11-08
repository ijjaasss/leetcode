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
