// import { heroes } from "./data/heroes";
// import { heroes } from "./data/heroes";

import heroes, { owners } from "../data/heroes";

console.log(owners);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id); //Puedo hacerlo así porque se trata de una funciones que usan un solo return, sino tendría que hacerlo tipo "(heroe) => {if(condicion){acción} else {acción alternativa}}" y eso adentro de otra función

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner("DC"));
console.log(getHeroesByOwner("Marvel"));
