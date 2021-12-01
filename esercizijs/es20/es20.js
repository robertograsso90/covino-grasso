function verifica (){
	var x = document.getElementById('numero').value;
	var y = document.getElementById('cifra').value;
	if ((x > 0) || (y < 0)){
		document.getElementById('risultato').innerHTML = 'vero';
	}
	else{
		document.getElementById('risultato').innerHTML = 'falso';
	}	
	
}