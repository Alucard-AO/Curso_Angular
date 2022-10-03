var minhaVar = 'minha variavel ';

function minhaFuncao(x,y){
    return x+y;
}

//ES 6 ou ES 2015
let num1 = 2; 
const PI1 = 3.14;


var numeros = [1,2,3];
numeros.map(function(valor){

    return valor *2;
});

numeros.map(valor =>valor * 2); //É a mesma coisa que o de cima mas é da versão: ES 2015


class Matematicas {
    soma ( x , y ) {

        return x + y;

    }
}





var n1: any = 'cu';
n1 = 4;