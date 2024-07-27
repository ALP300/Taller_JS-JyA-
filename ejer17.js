function encontrarMayoryMenor(numeros){
    let mayor= numeros[0];
    let menor= numeros[0];

    for(let i=1; i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor=numeros[i]
        }
        if(numeros[i]<menor){
            menor=numeros[i]
        }
    }
    return{mayor,menor};
}

let numeros=[2,3,4,1]
console.log(encontrarMayoryMenor(numeros));


