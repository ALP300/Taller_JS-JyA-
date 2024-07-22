// Escribe un programa en JavaScript que calcule la 
// suma de todos los números pares entre 1 y 100.
// Tienes que realizar este ejercicio para practicar
// el uso de bucles for y la acumulación de valores 
// dentro de una variable, destacando la importancia
// de los operadores aritméticos para iterar sobre números pares.

let sumaPares=0;
for(let i=2; i<=100; i+=2){
    sumaPares+=i;
}
console.log("La suma es: "+sumaPares);
  