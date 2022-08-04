const personajes = ["Carol", "Wanda", "Natasha"];

/* console.log(personajes); // Todos los elementos del arreglo
console.log(personajes[0]); // El primer elemento del arreglo
console.log(personajes[1]); // El segundo elemento del arreglo
console.log(personajes[2]); // El tercer elemento del arreglo */

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo(); // Si bien se trata de una función, esta está retornando un arreglo así que la trato como tal y puedo desestructurar el arreglo que retorna

console.log(letras, numeros); // A esta altura ya son constantes independientes, los "saqué" del array y puedo usarlos más fácilmente para lo que necesite

/* TAREA
1. La primera posición del arreglo se desestructurará y se llamará "nombre"
2. La segunda posición del arreglo se desestructurará y se llamará "setNombre" (sino "etNombre")
*/

const seState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola, Mundo");
    },
  ]; // Puedo meter funciones dentro de arreglos :O
};

const arr = seState("Peggy");

const [nombre, etNombre] = seState("Peggy");

console.log(nombre);
etNombre(); //Sin la desestructuración, esta línea sería "arr[1]();"
