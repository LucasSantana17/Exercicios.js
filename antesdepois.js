const input = require('prompt-sync')({sigint:true});

var numero = parseInt(input('Digite um número: '));

console.log(' Antecessor: ', numero-1);
console.log(' Sucessor ', numero+1);
