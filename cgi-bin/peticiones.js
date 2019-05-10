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
		//respuesta = procesaGet(pet);
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

function procesaGet(peticion) {
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	var palabra = url.parse(peticion.url, true);
	console.log(palabra);
	var datapalabra = palabra.query; //acceder al objeto de url
	var palabrainvertida = reverse(datapalabra.texto);
	//console.log(palabrainvertida); revisar qué valor trae palabra invertida
		return palabrainvertida;
}



function procesaPost(peticion) {

	//Igualmente, aquí hay que obtener el valor que venga en la URL...


}

	function reverse(str){
 if (str !== undefined){
	 return rev = str.split('').reverse().join('');
}
}

function saludo(str){
	var fecha = new Date(); //fecha que se registra del equipo
	var hora = fecha.getHours() //obtiene la hora de la fecha registrada
