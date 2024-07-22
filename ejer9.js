//Escribe un programa en JavaScript que solicite al 
//usuario ingresar 10 números y calcule 
//la suma de esos números utilizando un bucle for.

let suma = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    suma += numero;
}

console.log("La suma de los 10 números es:", suma);
