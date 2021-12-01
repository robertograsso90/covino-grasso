function creare (){
	var x = document.getElementById('stringa').value;
	console.log(x.length)
	if (x.length >= 1){
	document.getElementById('rimuovere').innerHTML =  'a' + x.substring(1,x.length -1) + 'e'   ;
	}
	}