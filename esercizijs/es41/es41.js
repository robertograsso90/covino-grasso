function controllare(){
	var x = parseInt(document.getElementById('numero').value) 
	var y = parseInt(document.getElementById('cifra').value)
	var z = parseInt(document.getElementById('valore').value)
	if((x===y)&&(y===z)){
		document.getElementById('prova').innerHTML = '30'
	}
	else if((x===y)&&(x===z)||(y===z)){
		document.getElementById('prova').innerHTML = '40'	
	}
	else{
		document.getElementById('prova').innerHTML = '20'	
	}
	}

