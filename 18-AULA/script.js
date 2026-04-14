// Com arrays
var barquinho = ["Pedro","Tiago", "João"]
var profissoes =["Pescador", "Contador", "Carpinteiro"]

console.log("o ", barquinho[0]);

//Com objeto
// { chave: valor }
var cantores = {
    //chave : "valor"
    nome : "Menos é mais",
    generoMusical : "Pagode",
    estaVivo : true,
    idade: 10 
}

//Printa o objeto inteiro
console.log(cantor);

// Printa uma chave do objeto
console.log(cantor.nome);
console.log(cantor.generoMusical);

// typeof(cantor)

// acessando propriedades
var intervalo = {
    horaInicio : "15h00",
    horaFim : "15h20",
    local: "Pátio",
    duracao: "20 min"
}

console.log("O intervalo inicia às :", intervalo["horaInicio"])


// Alterando um objeto

var garrafa = { }
console.log(garrafa);

// Adicionando novas propriedades
garrafa.cor = "Azul"
garrafa.cor = "600 ml"
garrafa.cor = 8.5
garrafa.["marca"] = "Suco Glub"

console.log(garrafa);

// Alterando valores, de propriedades já existentes
garrafa.cor = "Rosa"
garrafa["marca"] = "Topoué"

console.log(garrafa);

// OBJETOS
var animal = {
    // propriedades
    nome : "Tom",
    especie : "Garça",
    raca: "Adidas",

    // métodos
    falar : function(){
        console.log("SHAZAM");
    },
    andar : () => {
        console.log("FUUUUUU")
    },
    dormir : () => {
        console.log("zzzzzzzzzzz");
    }

    // mostrando um valor através da propriedade
    console.log(animal.nome)

    // mostra o texto da função
    console.log(animal.falar)

    // executa a função
    animal.falar()
}
