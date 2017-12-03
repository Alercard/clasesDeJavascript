// en este caso, la funcion punto, viene a ser el constructor de la clase Punto
function Punto(x, y) {
  // this hace referencia al objeto Punto que se esta creando
  this.x = x;
  this.y = y;
  // return es ambiguo, porque javascript lo hace automaticamente
  // return this;
}

// los metodos se asignan a prototype
Punto.prototype.moverEnX = function moverEnX(x) {
  // prototype.moverEnX puede recibir una funcion anonima, pero
  // para casos de debug, una buena practica es indicar una función
  // con nombre para saber en donde podria ocurrir algun error
  this.x += x;
}

Punto.prototype.moverEnY = function moverEnY(y) {
  this.y += y;
}

Punto.prototype.distancia = function distancia(p) {
  const x = this.x - p.x;
  const y = this.y - p.y;

  return Math.sqrt(x * x + y * y);
}

// Al usar new, crea un nuevo objeto y le asigna el prototipo definido en la funcion Punto
const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)


console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))

// si modificamos la propiedad __proto__ de la clase Punto, todos los objetos se veran afectados
p1.__proto__.moverEnX = function(){console.log('funcion en mantenimiento');};
p2.moverEnX(10);
