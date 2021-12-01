function creare (){
	var x = document.getElementById('stringa').value;
	if (x.length >= 3){
	document.getElementById('rimuovere').innerHTML = x.substring(x.length -3, x.length)+ x + x.substring(x.length -3, x.length)    ;
	}
	}