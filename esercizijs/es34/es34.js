function controllare(){
	var x = parseInt(document.getElementById('cifra').value);
	var y = parseInt(document.getElementById('numero').value);
	if (((x <=40) && (x =>60)) || ((y <=40) && (y =>60))){
		if (x > y){
			document.getElementById('prova').innerHTML = x+ ' maggiore di y' 
		}
		else if (y > x){
			document.getElementById('prova').innerHTML = y+ ' maggiore di x'
		}
	}
		else{
			document.getElementById('prova').innerHTML = 'uguali'
		}
}