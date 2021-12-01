let text = 'w3resource';
function change(){  

document.getElementById('text').innerHTML = text
text = text.substring(9) + text.substring(0,9);

}
setInterval(change, 1000);
