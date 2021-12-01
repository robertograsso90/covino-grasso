function controlla(){
	var x = document.getElementById('numero').value; 
	var y = document.getElementById('cifra').value;
	if ((x == 50 || y == 50) || (parseInt(x) + parseInt(y) == 50)){
	 	document.getElementById('risultato').innerHTML = 'vero';
	}
	else{
		document.getElementById('risultato').innerHTML = 'falso';
	}
}