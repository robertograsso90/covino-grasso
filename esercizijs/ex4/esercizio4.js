var numeri =0;
function quadrati () {
	for(let i=1;i<=document.getElementById("moltiplicazioni").value;i++) {
		numeri = numeri+"<br>" + i*i;
		document.getElementById("quadrati").innerHTML = numeri + "<br>" +'fine elaborazione'
	}
}
