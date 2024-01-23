function MeuObjeto(){}

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}

obj1.falar();

obj2.nome='Rafael';
obj2.falar();