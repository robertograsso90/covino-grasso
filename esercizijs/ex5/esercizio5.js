var account=['luca','marco','giulio','miky','gino']
function scelte (){
for (let i=0;i<account.length;i++){
if (account[i] === document.getElementById("rettangolo").value){
	document.getElementById("accedi").innerHTML = "accesso consentito";
	break;
	}
else { 
	document.getElementById("accedi").innerHTML = "accesso non consentito";
	}
	}
};

