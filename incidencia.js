//Problema 
//Listar em uma variável, quantos números são incientes nas duas listas 

var lista1 = [1,2,3,4,5,6];
var lista2 = [2,3,4,5,6,7,8];


var aux =0;
for(var i = 0; i < lista2.length ; i++){
     if(lista1[i+1]==lista2[i]){
        aux += 1;
     }
}

console.log(aux);

