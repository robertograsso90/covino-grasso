function trovare(){
	var x = parseInt(document.getElementById('cifra').value);
	var y = parseInt(document.getElementById('numero').value);
	if (Math.abs(x - 100) < Math.abs( y-100)){
		document.getElementById('prova').innerHTML = x + ' valore più vicino a 100' 
	}
	else{
		document.getElementById('prova').innerHTML = Y + ' valore piu vicino a 100'
	}
}