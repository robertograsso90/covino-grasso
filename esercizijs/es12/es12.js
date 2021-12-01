function celsius (){
	var a = parseInt (document.getElementById('pippo').value) ;
	var c = parseInt((a -32)*(5/9));
	document.getElementById('gradi').innerHTML = c;
}
function fahrenheit (){
	var a = parseInt (document.getElementById('pippo').value) ; 
	var f = parseInt (a*(9/5)+32);
	document.getElementById('gradi').innerHTML = f;
}