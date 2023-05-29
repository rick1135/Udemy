let num1 = 1;
let num2 = 2;

num1++; // num1 = num1 + 1
console.log(num1);

--num1; // num1 = num1 - 1
console.log(num1);

console.log(++num1 === num2--); // true because num1 is 2 and num2 is 2 before the comparison
console.log(num1 === num2); // false because num1 is 2 and num2 is 1 after the comparison
