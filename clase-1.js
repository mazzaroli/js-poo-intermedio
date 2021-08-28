class Patito {
    static sonidito = 'cuack!'
}

console.log(Patito.sonidito)
// cuack!

class Patito {
    static hacerSonidito() { // Si no agregamos Static no podremos acceder al atributo
        return "quack";
    }
}

console.log(Patito.hacerSonidito());
// quack!

// como llamar los metodos y atributos sin crear una instancia del prototipo
// metodos estaticos de la mama protito Object

const objetito = {
    name: "Carlitos",
    email: "carlitosmazzaroli@gmail.com",
    age: 16,
}

Object.keys(objetito)
// nos devuelve una lista con todos los keys(nombres claves) de nuestro objeto objetito

// (3) ["name", "email", "age"]

Object.getOwnPropertyNames(objetito)
// (3) ["name", "email", "age"]

Object.entries(objetito)
// El metodo entries nos devolvera un arrays de arrays donde tendremos nuestra palabra clave con su respectivo valor por cada propiedad del prototipo [key, value]
// [
//     0: (2) ["name", "Carlitos"]
//     1: (2) ["email", "carlitosmazzaroli@gmail.com"]
//     2: (2) ["age", 16]
// ]
Object.getOwnPropertyDescriptors(objetito) // Nos devuelve todas las propiedades de los objetos, con sus keys y values, y otros atributos. Los atributos writable, configurable y enumerable es la forma que tiene JavaScript para limtiar el acceso modificar o midificacion de nuestros atributos o de nuestros objetos.
// {
//     age:{
//         configurable: true
//         enumerable: true
//         value: 16
//         writable: true
//     }
//     email:{
//         configurable: true
//         enumerable: true
//         value: "carlitosmazzaroli@gmail.com"
//         writable: true
//     }
//     name:{
//         configurable: true
//         enumerable: true
//         value: "Carlitos"
//     }
// }