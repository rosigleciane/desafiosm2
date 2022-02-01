//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 10;
if(idade>18){
    console.log("você é maior de idade")
}else{
    console.log("você é menor de idade")
}


//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let humana = true;
if(idade>18 && humana) {
    console.log("você é humana e maior de idade")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversario = "fevereiro"
if(aniversario == "janeiro" || aniversario == "dezembro"){
    console.log("você faz aniversario em janeiro ou dezembro")
}else{
    console.log(`você faz aniversario em ${aniversario}`)
}
