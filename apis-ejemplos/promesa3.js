// * Ejemplo de promesa - como funciona

// * Este codigo esta mejorado usando Promise()


/* ------------------------ BACK END ------------------------- */
function BackendFunction() { // Simulamos tiempo con setTimeout()
    setTimeout(() => {
        console.log("Timeout Completo")
        return "ok!";
    }, 3000)
}

// * Creando una promesa - resolver o rechazar la promesa -
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Timeout Completo")
        resolve("ok!");
    }, 3000)
});


/** -------------------- FRONT END (nuestra app de React) ---------------------------- */

console.log(promesa);

promesa.then((respuesta)=>{
    console.log("Promesa Completa, respuesta: ", respuesta);
})


// console.log("App Iniciada . ⏭");
// console.log(`Respuesta del Backend: ${respuestaBackend}`);
// console.log("Llegamos al Final 🛑");

