const nombre = "Maira";
const apellido = "Perez";

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

// Si los separo y escribo nombre y apellido uno debajo del otro, por pantalla también me los muestran apilados en vez de enfilados. En esta estructura ${} también puedo meter operaciones matemáticas propias de JS, todo lo que uso en JS se permite dentro de los corchetes. Por ejemplo un ${1+1} mostrará un 2 por pantalla. O incluso funciones ↓

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
