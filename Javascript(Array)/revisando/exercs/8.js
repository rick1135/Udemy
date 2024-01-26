function mult(x, y){
    let res=0;
    if(x >= 0 && y >= 0){
        for(let i=0; i<y; i++){
            res+=x;
        }
        return res;
    }
    else return "Número não é maior ou igual a zero";
}

console.log(mult(5, 5));
console.log(mult(0, 7));
console.log(mult(8, 8));
console.log(mult(9, 9));