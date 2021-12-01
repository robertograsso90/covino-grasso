var oggi = new Date();
var natale = new Date(2021,11,25)
function differenzaGiorni () {
	var diff = (natale-oggi)
	document.getElementById('mancanti').innerHTML = "giorni che mancano al natale" + parseInt(diff/(24*60*60*1000))
}
differenzaGiorni ()

