/*
//MOSTRANDO UAM MENSAGEM NO CONSOLE
console.log("Salve rapaziada do canal, se inscreva ai")

// CAIXINHA DE ALERTA
// alert("TESTE PRA VER SE FUNCIONA")

// CRIANDO VARIÁVEIS
var nome = "Cristiano" // String ou cadeia
var numero = 7         // Int ou inteiro
var pulo = 2.10        // Float ou real
var theBest = true     // bool ou lógico

// FUNÇÃO QUE MSOTRA O TIPO DA VARIÁVEL
console.log(typeof(nome))

console.log("Seu nome é:" + nome)          // String ou cadeia 
console.log("Seu número é:" + nome)        // Int ou inteiro 
console.log("Seu pulo é:", salto)          // Float ou real
console.log("É o milior? = ", theBest)     // Bool ou lógico

nome = 10
console.log(typeof(nome))

//OUTROS TIPOS DE VARIÁVEL
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

//OPERADORES ARITMÉTICOS
// +, -, *, /, %

/*
var a = 10, b = 5

console.log("Soma:", a + b)
console.log("Substração:", a - b)
console.log("Multiplicação:", a * b)
console.log("Divisão:", a / b)
console.log("Módulo:", a % b)

// OPERADORES LÓGICOS
// E, OU, NÃO
//&&, ||, !

var verdade = true, mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && mentira)

// OPERADORES RELACIONAIS
// >, <, >=, <=, ==, !=, ===, !==

var x = 65, y = 32, z = "65"
// Verificando apenas o valor
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
// Verificando valor e tipo
console.log(x === y)
console.log(x !== y)

console.log(x !== y)

*/
//COMENTEI TODA A PARTE DE OPERADORES

//DESVIOS CONDICIONAIS

// SE = IF

/*
var estaVivo = true

// primeira comparação
if(estaVivo == true){
    console.log("Parabens, você está vivo")
}
// segunda comparação, caso a primeira de errado
else if(estaVivo == undefined){
    console.log("Você não tá nada")
}
// entra aqui, caso todas as outras comparações deem errado
else{
    console.log("Infelizmente, você foi de arrasta ☠️")
}

// SWITCH = ESCOLHA
var camisa = "Azul"

switch(camisa){
    case "Azul":
        console.log("Você ganhou um voucher")
    break
    case "Branco":
        console.log("Você ganhou um body splash da Virginia")
    break
    case "Vermelho":
        console.log("Você ganhou uma ferrari 3 portas")
    break
    default:
        console.log("Camisa inválida e feia, vá trocar")
    break
}
*/

// COMENTEI TODA A PARTE DE DESVIOS

// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR 
prompt("Digite seu nome")

var time = prompt("Me diga, para quem você torce?")

console.log("Seu time é: ", time)