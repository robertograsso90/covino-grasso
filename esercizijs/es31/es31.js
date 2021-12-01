function controlla (){
	var x = parseInt (document.getElementById('stringa').value);
	var y = parseInt (document.getElementById('numero').value);
	var z = parseInt (document.getElementById('cifra').value);
	if ((x >y) && (x >z)){
		document.getElementById('prova').innerHTML = x +' è il valore più grande'
	}
	if ((y >x) && (y >z)){
		document.getElementById('prova').innerHTML = y +' è il valore più grande'
	}
	if ((z >x && z >y)){
		document.getElementById('prova').innerHTML = z +' è il valore più grande'
	}
} 