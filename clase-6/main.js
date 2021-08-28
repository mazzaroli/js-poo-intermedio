const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
};

// Shallow Copy
// anda bien cuando tenemos que copiar propiedades dentro de los objetos, pero si tenemos que copiar objetos dentro de objetos F
const obj2 = {};
for (prop in obj1) {
    obj2[prop] = obj1[prop]; 
}

// Metodo mas easy de copiar elementros dentro de objetos, pero ocurre el mismo error con el For Shallow Copy
const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);