function differenza () {
	var n = parseInt(document.getElementById('numero').value) 
	if (n <= 13){
		document.getElementById('risultato').innerHTML = 13 - n;
	} else {
		document.getElementById('risultato').innerHTML = Math.abs (13 - n) * 2 ;
	}
	
};


