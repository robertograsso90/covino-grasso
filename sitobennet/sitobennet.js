function cercaProdotti() {
	var prodotto = document.getElementById('uno').value;
	if (prodotto === 'pizza') {
		document.getElementById('uno').classList.add('clicca')
		document.getElementById('cercaprodotti').classList.remove('nascondere');
	}
	else {
		document.getElementById('uno').classList.remove('clicca');
		document.getElementById('cercaprodotti').classList.add('nascondere')
	}
}
function togliProdotti(){
	document.getElementById('uno').classList.remove('clicca');
	document.getElementById('cercaprodotti').classList.add('nascondere')
}
function mostraProdotti() {
	document.getElementById('menuProdotti').classList.remove('nascondere');
	
}
  document.querySelector('.strisce').addEventListener('click', function(e){
	  mostraProdotti();
  })

function chiudiProdotti() {
	document.getElementById('menuProdotti').classList.add('nascondere');
	
}
function visualizzaFeste() {
	document.getElementById('colonna2').classList.add('nascondere');
	document.getElementById('colonna1').classList.remove('nascondere');
	document.getElementById('freschissimi').classList.remove('scrittaRossa');
	document.getElementById('speciale').classList.add('scrittaRossa');
	document.getElementById('colonna1').classList.remove('magazine');
	document.querySelector('#rosso').classList.add('magazine')
	document.querySelector('#rosso').classList.remove('rosso')
}
function chiudispecialifeste(){
	document.getElementById('colonna1').classList.add('nascondere');
}
document.querySelector('#minore').addEventListener('click', ()=> chiudispecialifeste());

function visualizzaFreschissimi() {
	document.getElementById('colonna2').classList.remove('nascondere');
	document.getElementById('colonna1').classList.add('nascondere');
	document.getElementById('freschissimi').classList.add('scrittaRossa');
	document.getElementById('speciale').classList.remove('scrittaRossa');
	document.querySelector('#rosso').classList.add('magazine')
	document.querySelector('#rosso').classList.remove('rosso')
}
function chiudifreschissimi(){
	document.getElementById('colonna2').classList.add('nascondere');
	document.querySelector('#speciale').classList.add('magazine')
	document.querySelector('#freschissimi').classList.add('magazine')
	document.querySelector('#speciale').classList.add('seleziona')
	document.querySelector('#freschissimi').classList.add('seleziona')
}
document.querySelector('#minore1').addEventListener('click', ()=> chiudifreschissimi());


function apriMontano(){
	document.getElementById('montanoLucino').classList.remove('nascondere');
}
document.querySelector('.casetta').addEventListener('click', function(e){
	apriMontano();
})
function chiudiMontano(){
	document.getElementById('montanoLucino').classList.add('nascondere');
}
function aprimondoBennet(){
	document.getElementById('bennetmondo').classList.remove('nascondere');
}
function chiudimondoBennet(){
	document.getElementById('bennetmondo').classList.add('nascondere');
}
function aprifascedisponibili(){
	document.getElementById('preferenze').classList.remove('nascondere');
}
function chiudifascedisponibili(){
	document.getElementById('preferenze').classList.add('nascondere');
}
function avantifascedisponibili(){
	document.getElementById('data').classList.add('nascondere');
	document.getElementById('data1').classList.remove('nascondere');
}
function dietrofascedisponibili(){
	document.getElementById('data1').classList.add('nascondere');
	document.getElementById('data').classList.remove('nascondere');
}
function aprilistapreferiti(){
	document.getElementById('listapreferiti').classList.remove('nascondere')
}

function chiudilistapreferiti(){
	document.getElementById('listapreferiti').classList.add('nascondere')
}

function entranelbennetclub(){
	var email = document.getElementById('inserisci').value;
	var password = document.getElementById('digita').value;
	if (email===''){
		document.getElementById('messaggioerrato').classList.remove('nascondere');
	} else{
		document.getElementById('messaggioerrato').classList.add('nascondere')
	}
	if	(password===''){
		document.getElementById('erroremessaggio').classList.remove('nascondere');
	} else{
		document.getElementById('erroremessaggio').classList.add('nascondere')
	}
}
function apricurriculum(){
	document.getElementById('spiegazione').classList.remove('nascondere');
	document.getElementById('arrow1').classList.add('nascondere')
	document.getElementById('arrow3').classList.remove('nascondere')
}
function chiudicurriculum(){
	document.getElementById('spiegazione').classList.add('nascondere');
	document.getElementById('arrow3').classList.add('nascondere')
	document.getElementById('arrow1').classList.remove('nascondere')
}
function aprilinkedin(){
	document.getElementById('profilo').classList.remove('nascondere');
	document.getElementById('arrow5').classList.add('nascondere')
	document.getElementById('arrow4').classList.remove('nascondere')
}
function chiudilinkedin(){
	document.getElementById('profilo').classList.add('nascondere');
	document.getElementById('arrow4').classList.add('nascondere')
	document.getElementById('arrow5').classList.remove('nascondere')
}
function aprirecruiting(){
	document.getElementById('recruiting').classList.remove('nascondere');
	document.getElementById('arrow6').classList.add('nascondere')
	document.getElementById('arrow7').classList.remove('nascondere')
}
function chiudirecruiting(){
	document.getElementById('recruiting').classList.add('nascondere');
	document.getElementById('arrow7').classList.add('nascondere')
	document.getElementById('arrow6').classList.remove('nascondere')
}
function vedimagazine(element){
	var finale = element.closest('.finale')
	finale.querySelector('.miky').classList.remove('magazine')
	finale.querySelector('.piu').classList.remove('mostrare')
	finale.querySelector('.meno').classList.add('mostrare')
}
document.querySelectorAll('.piu').forEach(strong => {
	strong.addEventListener('click', e => vedimagazine(e.target));
})
 
function chiudimagazine(element){
	var finale = element.closest('.finale')
	finale.querySelector('.miky').classList.add('magazine')
	finale.querySelector('.meno').classList.remove('mostrare')
	finale.querySelector('.piu').classList.add('mostrare')
}
document.querySelectorAll('.meno').forEach(strong => {
	strong.addEventListener('click', e => chiudimagazine(e.target));
})

function aprispesaonline(){
	document.querySelector('#speciale').classList.remove('magazine')
	document.querySelector('#freschissimi').classList.remove('magazine')
	document.querySelector('#speciale').classList.add('seleziona')
	document.querySelector('#freschissimi').classList.add('seleziona')
	
}
document.querySelector('.maggiore').addEventListener('click', function(e){
	aprispesaonline()
})
function chiudispesaonline(){
	document.querySelector('#speciale').classList.add('magazine')
	document.querySelector('#freschissimi').classList.add('magazine')
}
document.querySelector('.minore').addEventListener('click', function(e){
	chiudispesaonline()
})

document.querySelector('.x1').addEventListener('click', function(e){
	chiudiProdotti()
	
})

function menuinmobile(){
	document.querySelector('#speciale').classList.remove('seleziona')
	document.querySelector('#freschissimi').classList.remove('seleziona')
}
document.querySelector('.barre').addEventListener('click', function(){
menuinmobile()
})

