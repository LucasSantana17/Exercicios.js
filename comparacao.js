/*
a = [1, 2, 3]
b = [3, 2, 1]
Para elementos *0*, Bob recebe um ponto porque a[0] .
Para os elementos iguais a[1] e b[1] , nenhum ponto é ganho.
Finalmente, para elementos 2 , a[2] > b[2] então Alice recebe um ponto.
A matriz de retorno é [1, 1] com a pontuação de Alice primeiro e a de Bob em segundo.
*/

const input = require('prompt-sync')({sigint:true});

var a = [];
var b = [];
var numero;
var matrizResultado = [[],[]];

console.log('Digite os números da primeira lista: ');
for(var i = 0; i < 3 ; i ++ ){
    var numero = parseInt(input(': '))
    a.push(numero);
}

for(var x = 0; x < 3 ; x ++){
    var numero = parseInt(input(': '))
    b.push(numero);
}

var resultado = 1;
for( var z = 0; z < 3; z ++){
    if(a[z] > b[z] ){
        matrizResultado[0] += resultado;
    }else if (b[z] > a[z]) {
        matrizResultado[1] += resultado;
    } 
}

console.log(`Pontuações respectivamente para Alice e Bob: ${matrizResultado}`);


