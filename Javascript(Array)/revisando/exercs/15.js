function par(x){
    let res = [];
    for(let i=0; i<x.length; i++){
        if(x[i]%2==0 && i%2==0) res.push(x[i]);
    }

    console.log(res);
}

par([1, 2, 3, 4]);
par([10, 70, 22, 43]);