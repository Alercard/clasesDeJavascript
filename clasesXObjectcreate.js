// en este caso, Punto va a ser un objeto con sus propiedades y atributos definidos
const Punto = {
  // en este caso init sera el constructor de Punto y debe ser llamado desde de instanciar un Punto
  init: function init(x,y) {
    this.x = x;
    this.y = y;  
  },
  moverEnX: function moverEnX(x) {
    this.x += x;
  },
  moverEnY: function moverEnY(y) {
    this.y += y;
  },
  distancia: function distancia(p){
    let x = this.x - p.x;
    let y = this.y - p.y;
    return Math.sqrt(x*x + y*y);
  }
}

// p1 se crea a partir del objeto Punto
const p1 = Object.create(Punto);
// inicializamos p1 llamando a init (init no es en si una regla, sino una convencion, puede ser llamado de otra manera)
p1.init(0,4);
const p2 = Object.create(Punto);
p2.init(4,0);
console.log(p1.distancia(p2));

// al igual que con prototype, al modificar el objeto Punto, se modificaran todas las instancias de la misma
p1.__proto__.moverEnX = function(){ console.log('Funcion en mantenimiento'); };
p2.moverEnX(200);
