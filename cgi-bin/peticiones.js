const svr = require('http');
const url = require('url');

//Aquí hay que jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
const host = '127.0.0.1';
const puerto = '8080';

const servidor = svr.createServer((pet, resp) => {
	let respuesta = '';
	resp.setHeader('Content-Type', 'text/plain');
	if (pet.method == 'GET') {
		respuesta = procesaGet(pet);
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

	
	//Función para voltear la palabra cuando se ingrese
	function voltearPalabra(palabra) {
	if (palabra != undefined) {
		var str= palabra.split("") // convierte una cadena a arreglo
		return str.reverse(palabra).join(""); //revierte el arreglo y lo regresa a cadena
		}
	}


	function procesaGet(peticion) {
		//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	var texto = url.parse(peticion.url, true); //URL parse returns  a URL object
	console.log(texto);
	console.log(peticion.url);
	var textodata = texto.query.texto;
	return voltearPalabra(textodata);
	  
	  //Recibirá una palabra y responderá con el correspondiente saludo
	



};

function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	//console.log(peticion.url)
}
