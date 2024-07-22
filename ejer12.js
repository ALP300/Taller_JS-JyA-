//Escribe una función en 
//JavaScript que tome una cadena 
//como argumento y devuelva la cadena invertida.

//Leo 'L' 'E' 'O'
// 'O' 'E' 'L'
//oel
function invertirCadena(cadena){
    inv= cadena.split('').reverse().join();
    return inv;
}

let cad= prompt("Ingresa una cadena a invertir: "); 
console.log("Cadena invertida: ", invertirCadena(cad));

