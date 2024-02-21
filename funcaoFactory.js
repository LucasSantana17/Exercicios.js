//Uma função factory é uma função que retorna um objeto 


// instanciação de uma função factory 

Pessoa = (nome ) => {
    return{
        falar: () => console.log(`Olá eu me chamo ${nome} `)
    }
}

p1 = Pessoa("Lucas");

p1.falar();

//Em uma função factory não é necessario usar o this, pois ele ja estar inplicitamente atrelado a ela 
