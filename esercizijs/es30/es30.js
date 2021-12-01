function controlla(){
	var x = document.getElementById('stringa').value;
  if ((x.substring(4,10) === 'Script')) {
    document.getElementById('prova').innerHTML = x.substring(0, 4);
  }
	else{
	document.getElementById('prova').innerHTML = x;	
	}
  }