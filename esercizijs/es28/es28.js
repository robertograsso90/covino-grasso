function controlla(){
	var x = parseInt(document.getElementById('valore').value)
	var y = parseInt(document.getElementById('numero').value) 
    if ((x >= 50 )&&(x <= 99) || (y >= 50 )&&(y <= 99)){
		document.getElementById('prova').innerHTML = 'vero';
	}
	else{
		document.getElementById('prova').innerHTML = 'falso';
	}
}