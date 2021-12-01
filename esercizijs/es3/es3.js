var data = new Date();
var giorno = data.getDate();
var mese = data.getMonth()+1; 
var anno = data.getFullYear();
document.getElementById('data').innerHTML = "data di oggi : "+giorno + " : " + mese + " : " + anno;