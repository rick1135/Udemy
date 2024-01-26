function entre(n, min, max, incl = false){
    if(incl == false){
        if(n>min && n<max) return true;
        else return false;
    }
    else{
        if(n>=min && n<=max) return true;
        else return false;
    }
}

console.log(entre(50, 10, 100));
console.log(entre(160, 16, 100));
console.log(entre(3, 3, 150));
console.log(entre(3, 3, 150, true));