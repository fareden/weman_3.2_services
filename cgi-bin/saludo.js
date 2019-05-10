exports.saludar = function(str) {
	return saludo(str);
}

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