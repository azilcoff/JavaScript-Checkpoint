/* STRING MANIPULATION FUNCTIONS */


//Reverse a String: Write a function that reverses a given string.
function reverseString (s){
   /*let chars = [];
   for (let i = s.length-1;i>=0;i--){
      chars.push(s.charAt(i));
   }
   return chars.join("");*/
   return s.split("").reverse().join("");
}

//Count Characters: Create a function that counts the number of characters in a string.
function countChars (str,char) {
   let count = 0;
   for (const character of str.split("")){
      if (character===char) {
         count++;
      }
   }
   return count;
}

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function upperFirst (str) {
   const chars = str.split("");
   const first = chars[0].toUpperCase();
   chars[0]=first;
   return chars.join("");
}

/* ARRAY FUNCTIONS */ 

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaxMin (array) {
   let max = 0;
   let min = Infinity;
   for (const number of array) {
      if (number > max){
         max=number;
      }
      if (number < min) {
         min=number;
      }
   }
   return [min,max];
}

//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sum (array){
   let sum = 0;
   for (number of array){
      sum+=number;
   }
   return sum;
}

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filter (array,condition){
   const arr = [];
   for (const element of array) {
      if (condition(element)){
         arr.push(element);
      }
   }
   return arr;
}

function isEven (n){
   return n%2===0;
}

/* MATHEMATICAL FUNCTIONS */

//Factorial: Write a function to calculate the factorial of a given number.
function factorial (n){
   let current = 1;
   for (let i =n;i>0;i--){
      current*=i;
   }
   return current;
}

//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime (n){
   let prime = true;
   for (let i = 2;i<n;i++) {
      let result = n%i;
      if (result===0) {
         prime = false;
         break
      }
   }
   return prime;
}

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function fibonacci (n){
   if (n===1||n===0){
      return 1;
   }
   else{
      return fibonacci(n-1) + fibonacci(n-2);
   }
}


console.log(filter([13,4,77,91,2,18,289],isPrime));
