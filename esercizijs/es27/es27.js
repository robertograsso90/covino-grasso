function verificare(){
	var x = document.getElementById('stringa').value; 
	if ((x.substring(0, 4) === 'Java')||(x.substring(0, 4) === 'java')){
		document.getElementById('prova').innerHTML = 'vero'
	}
	else{
		document.getElementById('prova').innerHTML = 'falso'
	}
}