// Escribe un programa en JavaScript que solicite al usuario ingresar 
// un número y luego imprima la tabla de multiplicar de ese número 
// del 1 al 10 utilizando un bucle for.
let numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));

console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
