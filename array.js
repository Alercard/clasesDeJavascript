// para poder pasar parametros variables, pordemos usar ...Variable, esto indica que los parametros que se pasen
// se almacenaran en un array
// REDUCE
function suma(...params) {
  // los array cuentan con el metodo reduce, que permite iterar sobre cada elemento de un array
  return params.reduce((acumulativo, actual) => acumulativo + actual, 0)
}

suma(0,1,2,3,4,5)

// MAP
function doble(...params) {
  return params.map( x => x*2 )
}

doble(2,3,4,5,6,7,5)

// FILTER
const pares = (...numeros) => numeros.filter(x=> x % 2 == 0)
