function controllare(){
	var x = parseInt(document.getElementById('cifra').value);
	var y = parseInt(document.getElementById('numero').value);
	var z = parseInt(document.getElementById('valore').value);
	if  ((x%10)===(y%10) && (y%10)===(z%10)){
		document.getElementById('prova').innerHTML = 'vero'
	}
	else{
		document.getElementById('prova').innerHTML = 'falso'
	}
}