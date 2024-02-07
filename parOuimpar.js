const input = require('prompt-sync')({sigint:true});

var number = parseInt(input('Digite um número:' ));

if(number/2 == 1){
    console.log("Esse número é Par ");
}else{
    console.log("Esse número é impar ")
}

if(number < 0){
    console.log("Esse número é négativo ")
}


