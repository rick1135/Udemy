const nums = [1, 2, 3, 4, 5];

let res = nums.map(function(e){
    return e*2;
})
console.log(res);

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

res = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(res);