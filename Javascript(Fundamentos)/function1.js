//funcao sem retorno
function showSum(a, b) {
    console.log(a + b);
}

showSum(2, 3); // 5
showSum(2); // NaN
showSum(2, 5, 4, 5, 6); // 7
showSum(); // NaN

//funcao com retorno
function sum(a, b = 1) {
    return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(2)); // 3
