// Contador de vocales. Escribe un programa en JavaScript que cuente
// la cantidad de cada vocal en una cadena de texto ingresada por el usuario.
let texto= prompt("Ingresa un texto: "); //LEONARDO // Hola a TODOS
texto= texto.toLowerCase(); //leonardo  //  hola a todos
let contA=0;
let contE=0;
let contI=0;
let contO=0;
let contU=0;
//Computadora
for(let i=0; i<texto.length;i++){
    let caracter= texto[i];
    switch(caracter){
        case 'a':
            contA++;
            break;
        case 'e':
            contE++;
            break;
        case 'i':
            contI++;
            break;
        case 'o':
            contO++;
            break;
        case 'u':
            contU++;
            break;
    }
}
console.log("La cantidad de vocales es: ")
console.log("A: "+contA)
console.log("E: "+contE)
console.log("I: "+contI)
console.log("O: "+contO)
console.log("U: "+contU)
//LEONARDO- leonardo
//a,e,i,o,u
