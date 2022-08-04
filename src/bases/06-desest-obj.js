// Desestructuración o Asignación desestructurante

const persona = {
  nombre: "Carol",
  edad: 30,
  clave: "CaptainMarvel",
};

// const { nombre, edad, clave } = persona; → Esto significa crear una nueva constante que se llama como el atributo del objeto literal y que tiene como valor asignado ese mismo atributo que en general extraeríamos como persona.nombre en este caso, de acá en adelante existe la constante "nombre" y tiene como valor "Carol" como indica el objeto literal persona

const context = ({ clave, nombre, edad, rango = "Capitana" }) => {
  //Desestructuración directamente en el argumento de la función, sino sería const context = (objetoLiteral) => {const {clave, nombre, edad, rango='Capitana'} = objetoLiteral};
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      // Esto es un objeto literal dentro de otro
      lat: 13.5678,
      lng: 67.9865,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng }, //Le indico que quiero lat y lng por separado y latlng deja de existir,  aunque es más común hacer otro const {lat, lng} = latlng;
} = context(persona); // Si bien se trata de una función, esta retorna un objeto literal entonces la trato como tal y la desestructuro igual que si fuera un objeto literal común

console.log(nombreClave, anios);
console.log(lat, lng);

/* const retornaContext = ({ nombreClave, anios }) => {
  console.log(nombreClave, anios);
};

retornaContext(avenger); 

NO ESTÁ BIEN HECHA ESTA DESESTRUCTURACIÓN, ERA MÁS SENCILLA*/
