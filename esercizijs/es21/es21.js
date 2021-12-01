function verifica (){
	var x = document.getElementById('stringa').value;
	if (x.substring (0, 2) === 'Py'){
		document.getElementById('aggiungere').innerHTML = x ;
	}
	else{
		document.getElementById('aggiungere').innerHTML = 'py' + x;
	}
		
	}





