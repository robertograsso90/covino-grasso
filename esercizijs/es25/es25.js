function creare(){
	var x = document.getElementById('numero').value
	if((x % 3 == 0 || x % 7 == 0)){
		document.getElementById('risultato').innerHTML = 'multiplo'
	}
	else{
		document.getElementById('risultato').innerHTML = 'no multiplo '
	}
	
}