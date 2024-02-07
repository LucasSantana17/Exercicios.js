const input = require('prompt-sync')({sigint: true});

var salariominimo = parseFloat(input('Digite o valor do sálario minimo atual: '));
var usersalario = parseFloat(input('Digite o seu salario atual: '));

var mediasalario = parseInt(usersalario / salariominimo);

console.log('Média salarial: ', mediasalario);

