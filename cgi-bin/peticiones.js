const svr = require('http');
const url = require('url');
var fs = require('fs');
let qs=require("querystring");
const usr = require('url');
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
		//yo agrgué
		var body = "";
        pet.on("data", function (chunk) {
            body += chunk;
        });

        pet.on("end", function(){
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(body);
		});
		//fin de lo que agregué
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

//Hace el reverse de nuestra palabra 
function palabraAlreves(palabra) {
	//condición para validar que esté definido
	if (palabra !== undefined) {
		var str = palabra.split("")
		return str.reverse(palabra).join("");
	}
};

//Funcion para agregar saludo de acuedo a la hora del día
function saludo(palabra) {
	var fecha = new Date(); //Obtiene la fecha
	var hora = fecha.getHours();//Obtiene la hora
	if (hora >= 6 && hora <= 12) {
		return "Buenos días " + palabra;
	} else if (hora > 12 && hora <= 18) {
		return "Buenas tardes " + palabra;

	} else {
		return "Buenas noches " + palabra;
	}
}

function procesaGet(peticion) {
	//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.
	var q = url.parse(peticion.url, true);
	var q = q.query;
	//condicionamos para saber la acción que hará en relación al botón que selecciona
	if (q.invertir == 'Presiona aquí para el ejercicio 1') {
		return palabraAlreves(q.texto);
	} else if (q.saludar == '... activar el ejercicio 2') {
		return saludo(q.texto);

	}
}


function procesaPost(peticion) {
	var body='';
	let par=qs.parse(body);
	fs.readFile('textoArea.txt', par.area,function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	  });
	//Igualmente, aquí hay que obtener el valor que venga en la URL...

	console.log(peticion);
	console.log(peticion.body);

}
