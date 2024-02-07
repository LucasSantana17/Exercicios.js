const input = require('prompt-sync')({ sigint: true });

var lista = [];

console.log('Lista de números');

for(var x=0; x < lista.length;i++){
    var number = parseFloat(input('Digite um numero'));
    lista.push(number);
}
  var maiorNumero = lista[0];
for (var i = 0; i < 5; i++) {
    if (lista[i] > maiorNumero) {
        maiorNumero = lista[i];
    }
}

console.log(`Maior Número: ${maiorNumero}`);
