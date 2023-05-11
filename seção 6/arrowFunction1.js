let dobro = function (a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // return is implicit
console.log(dobro(Math.PI));

let ola = function (){
    return "Olá";
}

ola = () => "Olá";
ola = _ => "Olá"; // has a param
console.log(ola());