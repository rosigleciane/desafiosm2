// Crie um objeto que receba ao menos três propriedades sobre você.
const eu={
    cor:"preto",
    comida:"strogonoff",
    doce: "chocolate"
}



// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.time = "são paulo"
console.log(eu)


// Remova uma propriedade desse objeto.
delete eu.doce


//Mostre no console todas as propriedades desse objeto.
console.log(eu)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
let cadastro = [{
    nome: "Rosi",
    idade: 26,
    telefone:949988746,
    amigos:["Bruno", "Pedro"]
},
{
    nome: "Rosi",
    idade: 26,
    telefone:949988746,
    amigos:["Bruno", "Pedro"]
},{
    nome: "Rosi",
    idade: 26,
    telefone:949988746,
    amigos:["Bruno", "Pedro"]
},{
    nome: "Rosi",
    idade: 26,
    telefone:949988746,
    amigos:["Bruno", "Pedro"]
},{
    nome: "Rosi",
    idade: 26,
    telefone:949988746,
    amigos:["Bruno", "Pedro"]
}]
console.log(cadastro)

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.


//Na propriedade amigos, adicione ao menos 4 itens.

for(let numero = 0; numero<= 4; numero++){
    cadastro[numero].amigos.push("Henrique", "gustavo", "gabriel", "thiago") 
}
console.log(cadastro)
// Mostre no console o nome de um amigo de cada lista.
for(let lista = 0; lista <=4; lista++){
    console.log(cadastro[lista].amigos[lista])
}
