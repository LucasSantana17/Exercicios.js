
const input = require('prompt-sync')({sigint:true});

console.log('Digite uma palavara!');
let palavra = input(': ');

palavra  = palavra.split('');


for( var i = 0; i < palavra.length; i ++){
    for( var x = palavra.length;x > 0 ; x --){

    }
}

if (palavra[i] === palavra[x]){
       console.log('Sua palavra é um polídromo! ');
      }else{
       console.log('Essa palavra não é um polídromo');
      }

    
