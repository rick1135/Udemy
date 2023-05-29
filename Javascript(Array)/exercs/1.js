function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}
    
console.log(cumprimentar("Maria")) // retornará "Olá, Maria!"
console.log(cumprimentar("João")) // retornará "Olá, João!"