const svr = require('http');
const url = require('url');
var fs = require('fs');
let qs = require("querystring");
const usr = require('url');
const fibo = require('./fibonacci.js');
const saludo = require('./saludo.js');
const rev = require('./reverse.js');

//Aquí hay que jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
const host = '127.0.0.1';
const puerto = '8080';

const servidor = svr.createServer((pet, resp) => {
    let texto_respuesta = '';
    resp.setHeader('Content-Type', 'text/plain');
    if (pet.method == 'GET') {
        texto_respuesta = procesaGet(pet);
        resp.statusCode = 200;
        resp.end(texto_respuesta);
    } else if (pet.method == 'POST') {
		resp.statusCode = 200;
        procesaPost(pet, resp);
    } else {
        resp.statusCode = 404;
        resp.end(texto_respuesta);
    }
});

servidor.listen(puerto, host, () => {
	console.log('La aplicación está corriendo en: ' + host + ':' + puerto);
});


//Hace el reverse de nuestra palabra 
/*function palabraAlreves(palabra) {
	//condición para validar que esté definido
	if (palabra !== undefined) {
		var str = palabra.split("")
		return str.reverse(palabra).join("");
	}
	};*/

//Funcion para agregar saludo de acuedo a la hora del día

function procesaGet(peticion) {
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	var q = url.parse(peticion.url, true);
	var q = q.query;
	//condicionamos para saber la acción que hará en relación al botón que selecciona
	if (q.invertir == 'Presiona aquí para el ejercicio 1') {
		//	return fibo.doFibonacci(q.texto).toString();
		return rev.rev(q.texto);
	} else if (q.saludar == '... activar el ejercicio 2') {
		return saludo.saludo(q.texto);

	}
}


function procesaPost(peticion, respuesta) {
	 //Igualmente, aquí hay que obtener el valor que venga en la URL...
	 let body = '';
	 peticion.setEncoding('utf8');
	 peticion.on('data', function (parte) {
		 body += parte
	 });
 
	 peticion.on('end', function () {
		 contenido = qs.parse(body);
		// console.log(contenido);
		 if (contenido.correo != 'test@test.com' || contenido.pwd != 'test') {
			 respuesta.end("Datos de acceso incorrectos.");
		 }
 
		 fs.writeFile("textoArea.txt", contenido.area, (err) => {
			 if (err) {
				 respuesta.end("Ocurrió un error al guadar el archivo.");
				 console.log(err);
			 } else {
				 console.log("Successfully Written to File.");
			 }
			 respuesta.end("Archivo guardado correctamente!");
		 });
	 });
	//console.log(peticion);
	//console.log(peticion.body);
}
