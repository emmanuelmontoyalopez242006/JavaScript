let numero = 10.1212;
let nombre = "E,m,m,a,n,u,e,l"; //nombre.split(",");
let verdadero = true;
let falso = false;

console.log(nombre.length);
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
console.log(typeof nombre);
let arrNombre = nombre.split(",");
console.log(arrNombre);
console.log(arrNombre[0]);

console.log("--------------------------");

console.log(parseInt(numero));
console.log(numero.toFixed(2));
console.log(parseFloat(numero));

console.log("---------------");

function sumar(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}

const sumar = (numeroUno, numeroDos) => {
  return numeroUno + numeroDos;
};

const Animal = function (nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
};

Animal.prototype.saludar = () => {
  console.log(`Hola mi nombre es ${this.nombre}`);
};
