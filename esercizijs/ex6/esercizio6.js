var color = ["orange", "grey", "brown", "green"];
var i = 0;
var stop = true;
function change() {
if (stop == true){
	document.body.style.backgroundColor = color[i];i++;
  if(i > color.length - 1) {
	i = 0;
  }
}
}
setInterval(change, 1000)
function ferma(){
	stop = false;
}
function continua(){
	stop = true;
}