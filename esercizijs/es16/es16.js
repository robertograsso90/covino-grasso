function somma () {
	var n = document.getElementById('numero').value;
	var a = document.getElementById('cifre').value;
	var risultato = parseInt(n) + parseInt(a);
	if (n === a){
		document.getElementById('risultato').innerHTML = risultato * 3;
	} else {
		document.getElementById('risultato').innerHTML = risultato ;
	}
	
};