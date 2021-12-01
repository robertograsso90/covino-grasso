function controllare(){
	var x = document.getElementById('stringa').value;
	if (x.charAt(1, 4) === 'a' ){
		document.getElementById('prova').innerHTML = 'vero'
	}
	else{
		document.getElementById('prova').innerHTML = 'falso'
	}
}