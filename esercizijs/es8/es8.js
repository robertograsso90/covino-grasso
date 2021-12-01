var num = Math.round(Math.random() * 10);
 function pippo(){
	var input = parseInt(document.getElementById('quanti').value) 
	if (num === input){
	 document.getElementById('casuali').innerHTML = 'BUON LAVORO'
	}
	else{
	document.getElementById('casuali').innerHTML = 'non corrispondente'
	}
 };