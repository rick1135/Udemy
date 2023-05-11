console.log('01)', '1' == 1); // true
console.log('02)', '1' === 1); // false because '1' is a string and 1 is a number
console.log('03)', '3' != 3); // false
console.log('04)', '3' !== 3); // true
console.log('05)', 3 < 2); // false
console.log('06)', 3 > 2); // true
console.log('07)', 3 <= 2); // false
console.log('08)', 3 >= 2); // true

const d1 = new Date(0); // 0 means 01/01/1970
const d2 = new Date(0);

console.log('09)', d1 === d2); // false because they are different objects
console.log('10)', d1 == d2); // false because they are different objects
console.log('11)', d1.getTime() === d2.getTime()); // true because they are the same date
console.log('12)', undefined == null); // true
console.log('13)', undefined === null); // false 
