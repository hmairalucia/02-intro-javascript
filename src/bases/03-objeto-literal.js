const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: "54774993",
    lat: 14.6554,
    lng: 34.6564,
  },
};

//console.table(persona); sirve para mostrar los datos del objeto en una tabla en la consola

// const persona2 = persona; Acá estaría duplicando el objeto literal "persona" que creé antes, pero no estoy copiando su valor sino la referencia del espacio en memoria que ocupa ese objeto literal. Si quiero crear un clon tengo que volver a copiar todo lo que está dentro del objeto anterior.
// persona2.nombre = "Peter"; no es la forma correcta de cambiar el nombre de "persona2" porque en realidad estoy cambiando el nombre del espacio de memoria del objeto literal "persona", el objeto literal persona2 no existe, solo le roba el espacio en memoria a persona

// LAS FORMAS CORRECTAS de clonar y de cambiar el nombre del clon
const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
