const svr = require('http');
const url = require('url');
var fs = require('fs');
var qs = require('querystring');
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
		//AGREGO
		
        // FIN
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
	
	var a= url.parse(peticion.url,true); //
	var qdata = a.query; // Acceder al objeto de url
	console.log(qdata); 
	// Condicion para accionar de acuerdo al boton que apretamos, comparando nombre de los objetos de los dif botones 
	if (qdata.invertir == 'Presiona aquí para el ejercicio 1'){
		//qdata.texto es la propiedad del objeto url que contiene la palabra ingresada
		return reverse(qdata.texto); // Regresa la palabra al reves (con la funcion hecha aparte) 
	}
	else if (qdata.saludar == '... activar el ejercicio 2'){
		return saludo(qdata.texto); // Regresa el saludo + palabra (con la funcion hecha aparte) 
	}
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
}

function procesaPost(peticion) {
	//var a= url.parse(peticion.url,true); 
	var body = "";
        peticion.on("data", function (chunk) {
            body += chunk;
        });

        
	var b = qs.parse(body);
	//var qdata = a.query;
	//console.log(peticion); 
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	//qdata.area
	fs.writeFile('mynewfile1.txt', b.area , function (err) {
  	if (err) throw err;
  	console.log('Saved!');
});
}

// Funcion para regresar el reverso del string  
function reverse(str) { 
	// Lo pusimos para que no diera error al correrlo tratando de regresar el favicon ( la url) despues del primer 
	// intento
   if (str !== undefined){
   		return rev = str.split('').reverse().join('');
   }
} 


// Funcion para regresar de acuerdo a la hora, buenas tartes, dias o noches
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