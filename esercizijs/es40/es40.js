function controllare(){
	var x = parseInt(document.getElementById('cifra').value)
	var y = parseInt(document.getElementById('numero').value)
	if ((x+y == 8)||(x-y == 8)){
		document.getElementById('prova').innerHTML = '8'
	}
	else{
		document.getElementById('prova').innerHTML = 'falso'
	}
}