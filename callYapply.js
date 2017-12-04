const alguien = {nombre: 'Franklin', apellido: 'Lucero'};


function saludar(veces, uppercase){
  let str = `Hola ${this.nombre} ${this.apellido}.`;
  str = uppercase ? str.toUpperCase() : str;
  for (let i=0; i<veces; i++){
    console.log(str)
  }
}

saludar.call(alguien, 3, true);
saludar.apply(alguien, [3, true]);

const param = [3,true];
saludar.call(alguien, ...param);
