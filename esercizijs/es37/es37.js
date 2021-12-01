function controllare(){
	var x = document.getElementById('stringa').value;
	if (x.length < 3){
		document.getElementById('prova').innerHTML = x.toUpperCase()
	}
	else{(x.length > 3)
		document.getElementById('prova').innerHTML = x.substring(0,3).toLowerCase()+ x.substring(3)	
	}
}