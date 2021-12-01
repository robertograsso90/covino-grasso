function controllare(){
	var x =(document.getElementById('cifra').value);
	if ((x >=89) && (x <=100)) {
		document.getElementById('prova').innerHTML = 'a+'
	}
	else{
		document.getElementById('prova').innerHTML = 'falso'
	}
}