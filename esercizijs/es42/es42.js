function controllare(){
	var x = Math.abs(parseInt(document.getElementById('numero').value))
	var y = Math.abs(parseInt(document.getElementById('valore').value))
	var z = Math.abs(parseInt(document.getElementById('cifra').value))
	if (((x < y)) && ((y < z))){
		document.getElementById('prova').innerHTML = 'modalità rigorosa'
	}
	else if((z > y)){
		document.getElementById('prova').innerHTML = 'modalita soft'
	}
}