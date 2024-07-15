//Declara tres variables: a (un número), operador (un operador aritmético como 
//cadena), y b (otro número). Utiliza condicionales para realizar la operación 
//correspondiente y muestra el resultado.

let a= 10;
let operador='+';
let b=5;
let resultado;

if (operador === '+') {
    resultado=a+b;
}else if (operador === '-'){
    resultado=a-b;
}
else if (operador === '*'){
    resultado=a*b;
}
else if (operador === '/'){
    resultado=a/b;
}
else{
    console.log('Error: Operador no válido');
}
console.log(resultado);
