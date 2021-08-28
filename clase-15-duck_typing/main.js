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
function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    };
    
    const public = {
         // getters y setters NAME
         get name() {
            return private._name;
        },
        set name(newName) {
            if (newName.length != 0){
                private._name = newName;
            } else {
                console.warn('tu nombre debe tener al menos 1 caracter')
            }
        },

         // getters y setters COURSES
         get courses() {
            return private._courses;
        },
    };

    return public
}

// Fabrica de estudiantes
function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
        "_learningPaths": learningPaths,
    };

    const public = {
        age,
        email,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        // getters y setters NAME
        get name() {
            return private._name;
        },

        set name(newName) {
            if (newName.length != 0){
                private._name = newName;
            } else {
                console.warn('tu nombre debe tener al menos 1 caracter')
            }
        },


        // getters y setters LEARNING PATHS
        get learningPaths() {
            return private._learningPaths;
        },

        set learningPaths(newLP) {
            if (!newLP.name) {
                console.warn('tu LP no tiene la propiedad name')
                return;
            }
            
            if(!newLP.courses) {
                console.warn('tu LP no tiene courses')
                return;
            }

            if (!isArray(newLP.courses)) {
                console.warn('tu LP no es una lista (*de cursos)')
                return;
            }
            private._learningPaths.push(newLP);

        },
    };

    return public 
}

// Estudiante Prueba
const juan = createStudent({ name: 'Carlito', age: 20, email: 'carlito@mazzarolito.com', twitter: 'carlitosmzz',
}); 



