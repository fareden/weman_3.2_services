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

	
	//Función para voltear la palabra cuando se ingrese
	function voltearPalabra(palabra) {
	if (palabra != undefined) {
		var str= palabra.split("") // convierte una cadena a arreglo
		return str.reverse(palabra).join(""); //revierte el arreglo y lo regresa a cadena
		}
	}

	function mostrarSaludo(){
	 
	var a = new Date();
	var hora = a.getHours();
	if(hora >= 6 && hora<= 12){return("Hola, Buenas días")};
	if(hora >= 13 && hora<= 16){return("Hola, Buenas tardes")};
	if(hora >= 17 && hora<= 24){return("Hola, Buenas Noches")};
	}


	
		//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	function procesaGet(peticion) {
	var texto = url.parse(peticion.url, true);
	if(texto.query.saludar === undefined) {
		var textodata = texto.query.texto;
	return voltearPalabra(textodata);
	} 
	  
	  //Recibirá una palabra y responderá con el correspondiente saludo
	  //de esta manera me está regresando lo mismo (palabra invertida) en vez de (saludo) :(
	else{
		var textodos = url.parse(peticion.url, true);
		var textodatosdos = textodos.query.textodos;
	return mostrarSaludo(textodatosdos);
	//console.log(textodos);
	//console.log(peticion.url);
	}
	
	};

function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...

	//console.log(peticion.url)

	console.log(peticion);
	console.log(peticion.body);

}
