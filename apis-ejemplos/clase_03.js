/**
 * Explicacion de clase 03
 */

const curso = {
  comision: 51175,
  titulo: "React Js",
  profesor: "Santiago",
  alimnos: 200,
  estado: "en progreso",
  terminado: false,
  precioCurso: 1000,
  abonado: 400
}

// 1. Template Sting
console.log(`Tu curso es ${curso.titulo} de tu comision ${curso.comision} y tu saldo es ${curso.precioCurso - curso.abonado}`);

// 2. Destracturing
let {titulo, comision, precioCurso, abonado} = curso;

console.log(`Tu curso es ${titulo} de tu comision ${comision} y tu saldo es ${precioCurso - abonado}`);

// 3. Copiando Objetos

const nuevoCurso = curso;

nuevoCurso.profesor = "Carlos";
console.log(curso, nuevoCurso)

// Se usa operador Srepad ... para no copias las referencias del puntero
let newCurso = {...nuevoCurso};
newCurso.profesor = "Mark";

console.log(nuevoCurso, newCurso);

// 4. Propiedades Dinamicas

let propiedadAModificar = "comision";
let newValor = 12345

nuevoCurso[propiedadAModificar] = newValor;
console.log(newCurso, nuevoCurso);


