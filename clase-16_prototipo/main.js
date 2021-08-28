function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}


function deepCopy(subject) {
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
}

// Requerimientos de parametros obligatorios
function requiredParam(param){
    throw new Error(param + " Campo obligatorio");
}

// Fabrica de rutas de aprendizajes
function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;
}

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
    }

    if (isArray(learningPaths)) {
        this.learningPaths = [];
        // Detector de Rutas SUS o rutas Verdaderas
        for (learningPathIndex in learningPaths){
            if (learningPaths[learningPathIndex] instanceof LearningPath) {
                this.learningPaths.push(learningPaths[learningPathIndex])
            };
        };
    };
}

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
        {
            name: 'Escuela SUS',
            courses: [],
        }
    ]
});



