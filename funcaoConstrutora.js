// Calculadora simples usando uma função construtora 

const input = require('prompt-sync')({sigint:true});


console.log('Caculadora :')
n1 = parseInt(input(`: `));
n2 = parseInt(input(`: `));

console.log('Escolha a operação que deseja fazer:')

console.log(`1 Adição +
2 subitração - 
3 multiplicação x
4 divisão / `)


function Calculadora(n1, n2){       // uma função construtora tem o mesmo funcionamento de uma classe com construtor 
        this.n1 = n1;
        this.n2 = n2;


        this.soma = function (){    // nessa situação é preciso usar o this para tornar a função um metodo da função construtora 
            return console.log(this.n1 + this.n2);
        }

        this.subitracao = function (){
            return console.log(this.n1 - this.n2);
        }

        this.multipli = function (){
            return console.log(this.n1 * this.n2);
        }

        this.divisao = function (){
            return console.log(this.n1 / this.n2);
        }

}

result = new Calculadora(n1, n2);

var operacao = parseInt(input(': '));

    if(operacao == 1){
        result.soma();
    }else if(operacao == 2){
        result.subitracao();
    }else if(operacao == 3){
        result.multipli();
    }else if(operacao == 4){
        result.divisao();
    }else{
        console.log(`Operação não existente!`)
    }

