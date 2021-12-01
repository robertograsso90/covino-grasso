function verifica (){
	var x = document.getElementById('stringa').value;
	var part1 = x.substring(0,2)
	var part2 = x.substring (3 ,x.length)
	document.getElementById('rimuovere').innerHTML = part1 + part2;
}