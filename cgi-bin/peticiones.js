const svr = require('http');
const url = require('url');
const fs= require ('fs');
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

function voltearPalabra(palabra) {
	if (palabra != undefined) {
		var str = palabra.split(""); // convierte una cadena a arreglo //AQUI ESTABA EL ; QUE NO IBA
		return str.reverse(palabra).join(""); //revierte el arreglo y lo regresa a cadena
	}
//esto no funcionaba solo por un ; de más >.< ... TEN CUIDADO :)
}

function mostrarSaludo(){
	var a = new Date();
	var hora = a.getHours();
	if(hora >= 6 && hora<= 12) {
		return ("Buenos días, ")};
	if(hora >= 13 && hora<= 16) {
		return ("Buenas tardes, ")};
	if(hora >= 17 && hora<= 24) {
		return("Buenas noches, ")};
	}


function procesaGet(peticion) {
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	var texto =url.parse(peticion.url, true); //variable primero para poder usar esa info (es lo que no entendias)
	if (texto.query.saludar === undefined) { // con los puntitos concatenas   variable.lugar.tipo?
		var textodata = texto.query.texto;
		return voltearPalabra(textodata);
	} else{
		var textodos = url.parse(peticion.url, true); //URL parse returns  a URL object
		var textodatados = textodos.query.texto;
		console.log (textodatados)
		return mostrarSaludo(textodatados) + textodatados;
	}
};

	
function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	console.log(peticion);
	console.log(peticion.body);
}
