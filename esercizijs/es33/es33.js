function controllare(){
	var x = parseInt(document.getElementById('cifra').value)
	var y = parseInt(document.getElementById('numero').value) 
    if ((x >= 40 )&&(x <= 60) || (x >= 70 )&&(x <= 100)||(y >= 40 )&&(y <= 60) || (y >= 70 )&&(y <= 100)){
		document.getElementById('prova').innerHTML = ' compreso';
	}
	else{
		document.getElementById('prova').innerHTML = 'non compreso';
	}
}