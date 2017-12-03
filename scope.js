/////************************************************************************////////
// scope global
// ejemplo 1
var mascota = 'perro';

function miMascota(){
    console.log(`Mi mascota es un ${mascota}`);
}
miMascota();
console.log(`La variable mascota tiene el valor '${mascota}'`);

// ejemplo 2
function miMascota(){
  mascota = 'gato';
  console.log(`Mi mascota es un ${mascota}`);
}
miMascota();
console.log(`La variable mascota tiene el valor '${mascota}'`);

/////************************************************************************////////
// scope de la función
// ejemplo 1
var mascota = 'perro';

function miMascota(mascota){
    console.log(`Mi mascota es un ${mascota}`);
}
miMascota('gato');
console.log(`La variable mascota tiene el valor '${mascota}'`);

// ejemplo 2
function miMascota(){
  var mascota = 'gato';
  console.log(`Mi mascota es un ${mascota}`);
}
miMascota();
console.log(`La variable mascota tiene el valor '${mascota}'`);

// ejemplo 3
function miMascota(){
  if (true){
    var mascota = 'gato';
  }
  /*
  Seria lo mismo que hacer
  var mascota;
  if (true) mascota = 'gato';
  */
  console.log(`Mi mascota es un ${mascota}`);
}
miMascota();
console.log(`La variable mascota tiene el valor '${mascota}'`);

/////************************************************************************////////
// scope de bloque (var => let)
// ejemplo 1
function miMascota(){
  for (var i=0; i<=9; i++) {
    console.log(`Mi mascota es un ${mascota}`);
  }
  console.log(`El valor de i es ${i}`);
}
miMascota();
// conclusion: todas las declaraciones de variables con var, las sube a la primera linea de la función
// abusar de las declaraciones con var es una mala practica de programacion porque contamina el scope de la funcion

// ejemplo 2
function miMascota(){
  for (let i=0; i<=9; i++) {
    console.log(`Mi mascota es un ${mascota}`);
  }
  console.log(`El valor de i es ${i}`);
}
miMascota();
// conclusion: una buena practica es usar let y const antes que usar var
