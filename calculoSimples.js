const input = require('prompt-sync')({sigint:true});


var A = parseInt(input("Digite um número: "));
var B = parseInt(input("Digite um número: "));
var C = 0;

if (A === B){
    C =  A + B;
    console.log(`Valor ${C}`);
}else{
    C = A * B;
    console.log(`Valor ${C}`);
}



