// Prototipo Super Objeto 
function SuperObject() {}
// validar arrays
SuperObject.isArray = function(subject) {
    return Array.isArray(subject);
};
// valdiar objetos
SuperObject.isObject = function (subject) {
    if(SuperObject.isArray(subject)){
        return false;
    }
    return typeof subject == "object";
};
// Funcion deep copy
SuperObject.deepCopy = function (subject) {
    let copySubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)
 
    // inicializamos la variable copySubject segun su tipo de dato
    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    // Empieza la recursividad
    for (key in subject) {
        const keyIsObject = isObject(subject[key]); // propiedad de nuestro elemento

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]) // Si la propiedad es un objeto, se vuelve a llamar a deepCopy para volver a hacer las asignaciones por cada una de las propiedades de los objetos.
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
};


// Requerimientos de parametros obligatorios
function requiredParam(param){
    throw new Error(param + " Campo obligatorio");
};

// Fabrica de rutas de aprendizajes
function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;
};

// Fabrica de estudiantes
function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) { 
    this.name = name;    
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };
    const private = {
        "_learningPaths": [],
    }

    // Hacer la propiedad learningPaths privada
    Object.defineProperty(this, 'learningPaths', {
        get() {
            return private["_learningPaths"];
        },
    
        set(newLP) {
            if (newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn('Algunos de los LPs no es una instancia del prototipo LearningPath')
            };
        },
    });

    // Detector de Rutas SUS o rutas Verdaderas
    for (learningPathIndex in learningPaths){
        this.learningPaths = learningPaths[learningPathIndex]
    };
};

// LearningPaths Prueba
const escuelaWebDev = new LearningPath({ name: 'Escuela de WebDev', courses: []}); 
const escuelaDataScience = new LearningPath({ name: 'Escuela de Data Science', courses: []}); 
// Estudiante Prueba
const juan = new Student({ 
    name: 'Carlito',
     email: 'carlito@mazzarolito.com',
    learningPaths: [
        escuelaWebDev,
        escuelaDataScience,
    ]
}); 
