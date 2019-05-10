const svr = require('http');
const url = require('url');
const fibo = require('./fibonacci.js');


//Aquí hay que jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
const host = '127.0.0.1';
const puerto = '8080';

const servidor = svr.createServer((pet, resp) => {
	let respuesta = '';
	resp.setHeader('Content-Type', 'text/plain');
	if (pet.method == 'GET') {
		respuesta = procesaGet(pet, resp);
		console.log("Una petición");
		console.log(fibo.doFibonacci(10));
		resp.statusCode = 200;
	} else if (pet.method == 'POST') {
		respuesta = procesaPost(pet);
		resp.statusCode = 200;
	} else {
		resp.statusCode = 404;
	}
	resp.end(respuesta);
});

servidor.listen(puerto, host, () => {
	console.log('La aplicación está corriendo en: ' + host + ':' + puerto);
});

function procesaGet(peticion, respuesta) {


	var palabra= url.parse(peticion.url,true); //
	var datapalabra = palabra.query; // Acceder al objeto de url
	var palabrainvertida = reverse(datapalabra.texto);
	// Condicion para accionar de acuerdo al boton que apretamos, comparando nombre de los objetos de los dif botones
	if (datapalabra.invertir == 'Presiona aquí para el ejercicio 1'){
		//qdata.texto es la propiedad del objeto url que contiene la palabra ingresada
		//return reverse.rev(qdata.texto); // Regresa la palabra al reves (con la funcion hecha aparte)
		return palabrainvertida;
	}
	else if (datapalabra.saludar == '... activar el ejercicio 2'){
		return saludo(datapalabra.texto); // Regresa el saludo + palabra (con la funcion hecha aparte)
	} else {
	if (peticion.url === "/fibonacci") {
			var fibonacci = fibo.doFibonacci(10);
			return fibonacci.toString();
	}
	}
}




function procesaPost(peticion) {

	//Igualmente, aquí hay que obtener el valor que venga en la URL...


}

	function reverse(str){
 if (str !== undefined){
	 return rev = str.split('').reverse().join('');
}
}

function saludo(str) {
	var fecha = new Date(); // Obtiene fecha del equipo
	var hora = fecha.getHours(); // Obtiene hora de la fecha
	//console.log(hora);
	if(hora >= 6 && hora <= 12){
		return "Buenos Dias!  " + str;
	}
	else if(hora > 12 && hora <= 18){
		return "Buenas Tardes!  " + str;
	}
	else{
		return "Buenas Noches!  " + str;
	}
}
