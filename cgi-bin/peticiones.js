const svr = require('http');

const url = require('url');

const usr = require('url');
const fibo = require('./fibonacci.js');

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


//con esta funcion se invierte la palabra recibida
function palabrainversa(palabra) {
	if (palabra != undefined) {
		var str = palabra.split("")
	return str.reverse(palabra).join("");
	}
	
}

//con esta función se muestra un saludo 
//acorde a la hora
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


//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
//solicitar dato a través de la URL
//se obtiene la palabra que se da al presionar el primer botón
function procesaGet(peticion) {
	var texto = url.parse(peticion.url, true);
	if(texto.query.saludar === undefined) {
		var textodata = texto.query.texto;
	return palabrainversa(textodata);
	} 
	else{
//se obtiene la palabra que se da al presionar el primer botón
		var textodos = url.parse(peticion.url, true);
		var textodatosdos = textodos.query.texto;
	return mostrarSaludo(textodatosdos) + " " + textodatosdos;
	}
}


function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	console.log(peticion);
	console.log(peticion.body);
}
