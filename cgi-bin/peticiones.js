const svr = require('http');
const url = require('url');
const fs= require ('fs');
//Aquíue jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
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

function voltearPalabra(palabra) {
	if (palabra != undefined) {
		var str= palabra.split("") // convierte una cadena a arreglo //AQUI ESTABA EL ; 
		return str.reverse(palabra).join(""); //revierte el arreglo y lo regresa a cadena
	}
//esto no funcionaba solo por un ; de más... TEN CUIDADO :)
}


function procesaGet(peticion) {
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	var texto =url.parse(peticion.url, true);
	console.log(texto); // es bueno poner el log para el registro y en este caso para estar seguras que nos sirvió jajaja
	console.log(peticion.url);
	var textodata = texto.query.texto;
	return voltearPalabra(textodata);
};

	
function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	
}
