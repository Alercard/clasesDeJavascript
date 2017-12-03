// OBJETO DECLARADO
var p1 = {
   // declaracion de atributos
   x: 0, 
   y:3,
   // declaracion de metodos
   moverX: function(x) { this.x += x; },
   moverY: (y) => this.y += y
}
var p2 = {
   // declaracion de atributos
   x: 4, 
   y:0
}

function distancia(p1, p2) {
   const x=p1.x - p2.x;
   const y=p1.y - p2.y;
   return Math.sqrt(x*x + y*y);
}
// RESULTADOS
console.log(distancia(p1,p2));
// usamos los metodos del objeto p1
p1.moverX(4);
p1.moverY(-4);
// calculamos la distancia entre el objeto p1 y un objeto anonimo
console.log(
   distancia(
      p1,
      /* OBJETO ANONIMO */
      {x:0, y:7}
   )
);
