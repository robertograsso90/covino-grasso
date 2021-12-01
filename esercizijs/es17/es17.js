function differenza () {
	var n = parseInt(document.getElementById('numero').value) 
	if (n <= 19){
		document.getElementById('risultato').innerHTML = Math.abs(19 - n);
	} else {
		document.getElementById('risultato').innerHTML = Math.abs (19 - n) * 3 ;
	}
	
};
