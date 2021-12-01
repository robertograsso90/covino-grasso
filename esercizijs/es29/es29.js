function controlla(){
	var x = parseInt(document.getElementById('valore').value);
	var y = parseInt(document.getElementById('numero').value) ;
	var z = parseInt(document.getElementById('cifra').value) ;
    if ((x >= 50 )&&(x <= 99) || (y >= 50 )&&(y <= 99)||(z >= 50 )&&(z <= 99)){
		document.getElementById('prova').innerHTML = 'vero';
	}
	else{
		document.getElementById('prova').innerHTML = 'falso';
	}
}