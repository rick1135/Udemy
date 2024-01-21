function verif(str1, str2){
    new Boolean (contem = true);

    for(let i=0; i<str1.length; i++){
        let caracStr1 = str1.charAt(i).toLowerCase();
        for (let j = 0; j < str2.length; j++){
            let caracStr2 = str2.charAt(j).toLowerCase();
            if(caracStr1==caracStr2){
                contem=true;
                break;
            }
            else contem=false;
        }
        if(!contem) return contem;
    }
    for(let i=0; i<str2.length; i++){
        let caracStr2 = str2.charAt(i).toLowerCase();
        for (let j = 0; j < str1.length; j++){
            let caracStr1 = str1.charAt(j).toLowerCase();
            if(caracStr1==caracStr2){
                contem=true;
                break;
            }
            else contem=false;
        }
        if(!contem) return contem;
    }
    return contem;
}

console.log(verif('abcdf', 'dcba'))
console.log(verif('kaiak', 'kaiak'))