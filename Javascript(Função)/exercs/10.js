function divisivelPor3(num) {
    if (num % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divisivelPor3(3));
console.log(divisivelPor3(2));
console.log(divisivelPor3(150));
console.log(divisivelPor3(151));
console.log(divisivelPor3(152));