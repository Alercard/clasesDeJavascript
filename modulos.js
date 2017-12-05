console.log('Function Scope');

var miModulo = ( function miModulo() {
  var nombre = 'Franklin';
  
  function setNombre(otroNombre){
    nombre = otroNombre;
  }
  
  function getNombre(){
    return nombre;
  }
  
  return { getNombre, setNombre };
})();

console.log(miModulo.getNombre());
miModulo.setNombre('Ricardo');
console.log(miModulo.getNombre());
