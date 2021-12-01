function funAnnoBisestile(anno) {

    var varAnnoBisestile = new Date(anno,1,29).getDate() === 29;
    if (varAnnoBisestile === true ) {
        document.getElementById('anno').innerHTML = (anno + ' è bisestile');
    } else {
        document.getElementById('anno').innerHTML = (anno + ' non è bisestile');
    }
}

const anno = prompt('prova anno:');

funAnnoBisestile(anno);