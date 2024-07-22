//Escribe un programa en JavaScript que solicite al usuario ingresar 
//una contraseña. El programa debe seguir solicitando la contraseña 
//hasta que el usuario ingrese la correcta. 
//La contraseña correcta debe estar almacenada en una variable.
let contraCorrecta= "contraseña123";
let contraseña;

while(contraseña!==contraCorrecta){
    contraseña= prompt("Ingresa la contraseña: ");
    if(contraseña!==contraCorrecta){
        console.log("Contraseña Incorrecta. Inténtalo otra vez");
    }
}

console.log("¡CONTRASEÑA CORRECTA!");
