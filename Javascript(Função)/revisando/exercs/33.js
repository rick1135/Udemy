let vetInt = [1, 2, 3, 4];
let vetStr = ['Rick', 'Karele', 'Ivan', 'Galeguin'];
let vetDoub = [1.1, 2.2, 3.3, 4.4];

function conc(...args){
    res = [];
    for(let i=0; i<arguments.length; i++){
        res = res.concat(arguments[i]);
    }
    console.log(res);
}

conc(vetInt, vetDoub);
conc(vetDoub, vetStr);