function plano(idade){
    if(idade < 10){
        return 180;
    } else if(idade < 30) {
        return 150;
    } else if (idade < 60) {
        return 195;
    } else {
        return 230
    }
}

console.log(plano(8));
console.log(plano(18));
console.log(plano(38));
console.log(plano(58));
console.log(plano(68));