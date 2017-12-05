/*
Las Promesas son objetos y están asociadas con alguna tarea asincrónica.

Existen tres estados internos de las Promesas:

    Pending
    Fullfiled
    Rejected

El constructor Promise tiene dos parámetros:

const promise = new Promise(function (resolve, reject) { 

)}
Promise es un constructor que recibe una función con dos argumentos.
*/
function get(URL){
   return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.onreadystatechange = function () {
         const DONE = 4;
         const OK = 200;
         if (this.readyState === DONE) {
            if (this.status === OK){
               resolve(JSON.parse(this.responseText));
            } else {
               reject(new Error(`Se produjo un error al realizar el request: ${this.status}`));
            }
         }
      };
      xhr.open('GET', URL);
      xhr.send(null);
   });
}

/* Funcion para tratar el error */
function handleError(err){
   console.log(`Request failed: ${err}`);
}

let luke;
get('https://swapi.co/api/people/1/')
   .then((response) => {
      luke = response;
      return get(luke.homeworld);
   })
   .then((homeworld) => {
      luke.homeworld = homeworld;
      console.log(`${luke.name} nació en ${luke.homeworld.name}`);
   })
   .catch(err => handleError(err));

// con fetch
fetch('https://swapi.co/api/people/1/')
.then(response => response.json())
.then((json) => {
   luke = json;
   return fetch(luke.homeworld);
})
.then(response => response.json())
.then((json) => {
   luke.homeworld = json;
   console.log(`${luke.name} vive en ${luke.homeworld.name}`);
})
.catch(err => handleError(err));
