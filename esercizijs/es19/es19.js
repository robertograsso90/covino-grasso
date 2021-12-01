function controlla(){
	var x = 20
	var y = document.getElementById('numero').value;
	if((Math.abs(parseInt(y)-100) <= x)||(Math.abs(parseInt(y)-400) <= x)){
		document.getElementById('risultato').innerHTML = 'vero';
	}
	else {
		document.getElementById('risultato').innerHTML = 'falso';
	}
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	