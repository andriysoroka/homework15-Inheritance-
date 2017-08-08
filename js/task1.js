var myAssign = function () {;
	for (let i = 0; i < arguments.length; i++) {
		for (var key in arguments[i]) {
			arguments[0][key] = arguments[i][key];
		}
	}
	return arguments[0];
}
 var myExtend = function() {
	 
 }
