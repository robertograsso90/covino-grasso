function controllare(){
	var x = parseInt(document.getElementById('numero').value);
	var y = parseInt(document.getElementById('cifra').value);
	if((x + y >=50)&&(x + y <=80 )){
		document.getElementById('prova').innerHTML = '65'
	}
	else{
		document.getElementById('prova').innerHTML = '80'
	}
} 