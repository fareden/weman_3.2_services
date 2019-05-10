exports.rev = function(str) {
	return reverse(str);
}

// Funcion para regresar el reverso del string  
function reverse(str) { 
	// Lo pusimos para que no diera error al correrlo tratando de regresar el favicon ( la url) despues del primer 
	// intento
   if (str !== undefined){
   		return rev = str.split('').reverse().join('');
   }
} 