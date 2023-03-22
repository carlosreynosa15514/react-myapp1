// * Ejemplo de promesa - como funciona

//* Este codigo tiene la desventaja de que se ejecuta todo ,sin esperar la respuesta del a fuincion
//* que tarda 3 segundos en responder


/* ------------------------ BACK END ------------------------- */
function BackendFunction() {
    // Simulamos tiempo con setTimeout()
    setTimeout(
        () => {
            console.log("Timeout Completo")
            return "ok!";
        }, 3000
    )
}

/** -------------------- FRONT END (nuestra app de React) ---------------------------- */

console.log("App Iniciada . ⏭");

let respuestaBackend = BackendFunction();

console.log(`Respuesta del Backend: ${respuestaBackend}`);

console.log("Llegamos al Final 🛑");
