// Variables y constantes

const nombre = "Maira";
const apellido = "Perez";

let valorDado = 5;
valorDado = 4; // Para cambiar el valor de una variable let ya creada no hace falta usar let de nuevo

console.log(nombre, apellido, valorDado);

if (true) {
  let valorDado = 6;
  const nombre = "Peter";
  // el let y el const de arriba solo existen dentro del if, fuera del if los let y const que tienen el mismo nombre tienen asignados otros valores y esos son los que quedan por fuera del if
  console.log(nombre, valorDado);
}

console.log(valorDado);
