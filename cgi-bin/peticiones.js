const svr = require('http');

const url = require('url');
var fs = require('fs');
var qs = require('querystring');
//const express = require('express');
//const app = express();
//const port = 3000;
//const usr = require('url');
const fibo = require('./fibonacci.js');
const sal = require('./saludo.js');
const reverse = require('./reverse.js');

//Aquí hay que jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
const host = '127.0.0.1';
const puerto = '8080';



const servidor = svr.createServer((pet, resp) => {
	let respuesta = '';
	resp.setHeader('Content-Type', 'text/plain');
	if (pet.method == 'GET') {
		respuesta = procesaGet(pet);
		console.log("Una petición");
		//console.log(fibo.doFibonacci(10));
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
	//console.log(qdata); 
	// Condicion para accionar de acuerdo al boton que apretamos, comparando nombre de los objetos de los dif botones 
	if (qdata.invertir == 'Presiona aquí para el ejercicio 1'){
		//qdata.texto es la propiedad del objeto url que contiene la palabra ingresada
		//return reverse.rev(qdata.texto); // Regresa la palabra al reves (con la funcion hecha aparte) 
		return fibo.doFibonacci(qdata.texto).toString();
	}
	else if (qdata.saludar == '... activar el ejercicio 2'){
		return sal.saludar(qdata.texto); // Regresa el saludo + palabra (con la funcion hecha aparte) 
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
	console.log(peticion);
	console.log(peticion.body);

}
