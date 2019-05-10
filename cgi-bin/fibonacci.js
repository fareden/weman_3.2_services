exports.doFibonacci = function(saltos) {
	return laFibo(saltos);
}

function laFibo(saltos) {
	if (saltos === 1)  {
		return [0, 1];
	} else {
		var s = laFibo(saltos - 1);
		s.push(s[s.length - 1] + s[s.length - 2]);
		return s;
	}
}
