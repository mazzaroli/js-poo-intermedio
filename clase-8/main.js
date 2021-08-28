// estructura de una funcion recursiva
// function recursvia() {
//     if (/*validacion */){
//         // llamados recursivos
//     } else {
//         // llamados normales, sin recursividad
//     }
// }

// Hicimos un console.log por cada numerito en nuestra lista
const numeritos = [0,1,2,3,4,5,6,7,8,9,10,11];
// let numerito = 0;

// for (let index = 0; index < numeritos.length; index++) {
//     numerito = numeritos[index];
//     console.log(index, numerito);
    
// }


// Haremos lo mismo con una Funcion recursia
function recursiva(numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);

        numbersArray.shift();

        return recursiva(numbersArray)
    }
}