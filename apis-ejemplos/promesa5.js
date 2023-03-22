// * Ejemplo de promesa - como funciona

// * Este codigo esta mejorado usando Promise()

//*! Manejo de error con catch

/* ------------------------ BACK END ------------------------- */

function BackendFunction() {
    // Simulamos tiempo con setTimeout()
    
    // *  Creando una promesa - resolver o rechazar la promesa -
    const promesa = new Promise((resolve, reject) => {
        /**Logica de validacion para retornar resultado */

        //* Generando un error de manera aleatoria
        let decision = Math.random();
        let error = false; // Se crea un error dummy
        if (decision > 0.5){
            error = true;
        }

        console.log("Conectando al Servidor ...⏭")
        setTimeout(() => {
            console.log("Timeout Completo")

            if (error){
                reject(new Error("El producto no existe"))
            }else {
                resolve({id: 1, title: "Jamon de Cerdo 3k", price:300});
            }

        }, 3000)
    }); // * Fin de la promesa

    return promesa;

};
// * Fin de la funcion BackendFunction


/** -------------------- FRONT END (nuestra app de React) ---------------------------- */

BackendFunction()
    .then((respuesta) => {
        console.log("Promesa Completa, respuesta: ", respuesta);
    })
    .catch((error)=> {
        console.log("Hubo un error", error);
    })
    .finally(()=>{
        console.log("Proceso de Peticion de Api Finalizado")
    });




