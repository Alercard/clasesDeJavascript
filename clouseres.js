// Los clouseres son funciones que recuerdan el entorno en que fueron creadas
// saludarFamilia => outer function
function saludarFamilia(apellido) {
  // saludarMiembroDeFamilia => inner function
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")

saludarRomero("Jorge")


// optimizando la escritura del codigo
const saludar = (apellido) => (nombre) => console.log(`Hola ${nombre} ${apellido}`);

const saludoLuceros = saludar("Lucero")
const saludoCorreas = saludar("Correa")

saludoLuceros('Franklin');
saludoCorreas('Silvia');
