const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar("Vita"));
console.log(saludar2("Vita"));
console.log(saludar3("Vita"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "Mami1123",
});

console.log(getUser());

// TAREA
//1. Transformar a una función de flecha
//2. Tiene que retornar un objeto implícito (o sea lo de los paréntesis que envuelven corchetes)
//3. Pruebas

const getUsuarioActivo = (nombre) => ({
  uid: "ABC456",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Maira");

console.log(usuarioActivo);
