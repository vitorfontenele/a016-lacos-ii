const numero = +prompt("Digite um número e te mostrarei a tabuada dele!");

const arr = [...Array(10).keys()];

let resultado;
for (let i in arr){
    resultado = (Number(i)+1)*numero;
    console.log(`${numero} x ${Number(i)+1} = ${resultado}`);
}

