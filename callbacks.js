// en la funcion get, callback es una funcion
function get(URL, callback){
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		const DONE = 4;
		const OK = 200;
		if (this.readyState === DONE) {
			if(this.status === OK){
				//Todo OK
        // por convencion, el primer parametro debe ser el error, en este caso, no hubo error
        // por ende se pasa null, y el segundo parametro sera el resultado del request
				callback(null, JSON.parse(this.responseText));
			}else {
				//Hubo un error
        // por convencion, el primer parametro que debe recibir callback, es el error
				callback(new Error(`Se produjo un error al realizar el request ${this.status}`));
			}
		}
	}

	xhr.open('GET', URL);
	xhr.send(null);
}

/* Funcion para tratar el error */
function handleError(err){
	console.log(`Request failed: ${err}`);
}


/*llamada al metodo */
get('https://www.swapi.co/api/people/1/', function onResponse(err, luke){
	if(err) return handleError(err);

	/* Para traer el mundo */
	get(luke.homeworld, function onHomeworldResponse(err, homeworld){
		if(err) return handleError(err);

		luke.homeworld = homeworld;
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	});

	console.log(`Request succeded`);
	console.log('luke', luke);
}); 

/*
Habran casos que se deban encadenar callbacks creando lo que se conoce callbacks Hell. Para evitar esto,
se usan las promesas
*/
