function inverso(x){
    if (typeof x == "boolean"){
        return !x;
    }
    else if(typeof x == "number"){
        return -x;
    }
    else {
        return `booleano ou número esperados, mar o parâmetro é do tipo ${typeof x}`;
    }
}

console.log(inverso(5));
console.log(inverso(-5));
console.log(inverso(true));
console.log(inverso("Rick"));