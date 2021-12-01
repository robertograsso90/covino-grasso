function file (){
	file = document.getElementById('seleziona').value;
	document.getElementById('foglio').innerHTML = file.split('.').pop();
}
