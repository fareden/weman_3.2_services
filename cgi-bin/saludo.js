exports.saludo = function(nombre) {
	return saludo(nombre);
}

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
