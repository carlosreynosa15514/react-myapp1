//* Ejemplo de promesa - como funciona

/* ------------------------ BACK END ------------------------- */
function BackendFunction () {
    console.log("Conecting to backend ... 🕐");
    return "ok!";
}

/** -------------------- FRONT END (nuestra app de React) ---------------------------- */

console.log("App Iniciada . ⏭");

let respuestaBackend = BackendFunction();

console.log(`Respuesta del Backend: ${respuestaBackend}`);

console.log("Llegamos al Final 🛑");