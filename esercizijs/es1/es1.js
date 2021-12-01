var oggi = new Date();
var giorno = oggi.getDay();
var settimana = ["Domenica","Lunedì","Martedì","Mercoledì ","Giovedì","Venerdì","Sabato"];
document.getElementById('orario').innerHTML = " oggi è : " + settimana[giorno] + ".";
var ora = oggi.getHours();
var minuti = oggi.getMinutes();
var secondi = oggi.getSeconds();
document.getElementById('tempo').innerHTML = "orario attuale : "+ora + " : " + minuti + " : " + secondi;
