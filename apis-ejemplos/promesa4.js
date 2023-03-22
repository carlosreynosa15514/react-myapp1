// * Ejemplo de promesa - como funciona

// * Este codigo esta mejorado usando Promise()


/* ------------------------ BACK END ------------------------- */

function BackendFunction() { // Simulamos tiempo con setTimeout()
    //*  Creando una promesa - resolver o rechazar la promesa -
    const promesa = new Promise((resolve, reject) => {
        console.log("Conectando al Servidor ...⏭")
        setTimeout(() => {
            console.log("Timeout Completo")
            resolve("ok!");
        }, 3000)
    }); //* Fin de la promesa

    return promesa;

}; //* Fin de la funcion BackendFunction



/** -------------------- FRONT END (nuestra app de React) ---------------------------- */

BackendFunction()
    .then((respuesta) => {
        console.log("Promesa Completa, respuesta: ", respuesta);
    }) //* fin del .then


// console.log("App Iniciada . ⏭");
// console.log(`Respuesta del Backend: ${respuestaBackend}`);
// console.log("Llegamos al Final 🛑");

