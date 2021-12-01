function cifre (){
	var cap = document.getElementById('cap').value.length
	if (cap !== 5 ){
		alert('che il cap non sia maggiore o minore di 5 cifre');
	}
};
function lettere(){
	var cognome = document.getElementById('cognome').value
	if (!isNaN(cognome)){
		alert('deve verificare che questo campo non sia un numero');
	}
};
function lettera(){
	var nome = document.getElementById('nome').value
	if (!isNaN(nome)){
		alert('deve verificare che questo campo non sia un numero');
	}
};
function vuoto(){
	var cognome = document.getElementById('cognome').value
	if (!(cognome)){
		alert('verificare che il campo cognome non sia vuoto');
	}

	var nome = document.getElementById('nome').value
	if (!(nome)){
		alert('verificare che il campo nome non sia vuoto');
	}
	
	var sex = document.getElementsByName('sesso');
	if ((!sex[0].checked) && (!sex [1].checked)){
		alert('selezionare il sesso');
	}
	
	if ((document.registra.ateneo.value === "nessuno")){
		alert('selezionare ateneo');
	}
	
	if ((document.registra.lavoratore.checked) && (!document.registra.descr.value)){
		alert('scrive descrizione lavoro');
	}
	
}
	