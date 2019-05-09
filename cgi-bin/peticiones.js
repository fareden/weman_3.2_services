const svr = require('http');
const url = require('url');
//Aquí hay que jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
const express = ("express");
const host = '127.0.0.1';
const puerto = '8080';

const servidor = svr.createServer((pet, resp) => {
	let respuesta = '';
	resp.setHeader('Content-Type', 'text/plain');
	if (pet.method == 'GET') {
		respuesta = procesaGet(pet);
		console.log(respuesta);
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


//con esta funcion se invierte la palabra recibida
function palabrainversa(palabra) {
	if (palabra != undefined) {
		var str = palabra.split("")
	return str.reverse(palabra).join("");
	}
	
}

//función mostrar saludo
function mostrarSaludo(){
	var a = new Date();
	var hora = a.getHours();
	if(hora >= 6 && hora <= 12) {
	return ("Buenos días")};
	if(hora >= 13 && hora <= 16){
	return ("Buenas tardes")};
	if(hora >= 17 && hora <=24) {
	return ("Buenas noches")};
}

//se obtiene la palabra que se da al presionar el primer botón
function procesaGet(peticion) {
	var texto = url.parse(peticion.url, true);
	if(texto.query.saludar === undefined) {
		var textodata = texto.query.texto;
	return palabrainversa(textodata);
	} 
	else{
		var textodos = url.parse(peticion.url, true);
		var textodatosdos = textodos.query.textodos;
	return mostrarSaludo(textodatosdos);
	}
	
	


//se obtiene un saludo al presionar el botón dos

	//console.log(textodos);
	//console.log(peticion.url);
	
}

	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	//solicitar dato a través de la URL

function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	
}
