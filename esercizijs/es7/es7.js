for (var anno = 2014; anno <= 2050; anno++)
    {
    var domenica = new Date(anno, 0, 1);
    if ( domenica.getDay() === 0 )
        document.getElementById('anno').innerHTML = ("1 gennaio è una domenica "+anno);
    }

