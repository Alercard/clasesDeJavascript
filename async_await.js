/*
BABEL necesario
http://babeljs.io/repl/
preset: ES2015, REACT, stage-2 (permite usar async-await)
pertenecera a ECMAScript 2017
esto funciona a travez de babel generator y babel-polyfill
https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js
*/

function handleError(err){
   console.log(`Request failed: ${err}`);
}

async function getLuke(){
   try{
      // fetch devuelve una promesa, por ende res sera una promesa tambien
      // se pone await para esperar a que resuelva el fetch
      const response = await fetch('https://swapi.co/api/people/1/');
      const luke = await response.json();
      const responseHomeworld = await fetch(luke.homeworld);
      luke.homeworld = await responseHomeworld.json();
      console.log(`${luke.name} vive en ${luke.homeworld.name}`);
   } catch(err) {
      handleError(err);
   }
}

getLuke();
