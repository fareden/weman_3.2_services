const svr = require('http');
const url = require('url');
//const express = require('express');
//const app = express();
//const port = 3000;
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



function procesaGet(peticion) {
	
	var a= url.parse(peticion.url,true);
	var qdata = a.query;
	console.log(qdata);
	if (qdata.invertir == 'Presiona aquí para el ejercicio 1'){
		return reverse(qdata.texto);
	}
	else if (qdata.saludar == '... activar el ejercicio 2'){
		return saludo(qdata.texto);
	}
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
}

function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	
}

function reverse(str) { 
   if (str !== undefined){
   		return rev = str.split('').reverse().join('');
   }
} 

function saludo(str) {
	var fecha = new Date();
	var hora = fecha.getHours();
	console.log(hora);
	if(hora >= 6 && hora <= 12){
		return "Buenos dias  " + str; 
	}
	else if(hora > 12 && hora <= 18){
		return "Buenas Tardes  " + str;	
	}
	else{
		return "Buenas Noches  " + str;
	}
}