//Esta funcion comprobara si hay algun numero repetido
var esRepe = function(num, array) {
    var repetido = false;
    for (var i = 0; i < array.length; i++) {
        if (repetido === true) {
            return repetido;
        } else {
            if (num === array[i]) {
                repetido = true;
            }
        }
    }
    return repetido;
}

//Esta funcion generara los numeros aleatoriospara la primitiva
var genera = function() {
    var tirada = [];
    var c = 0;
    while (tirada.length < 6) {
        var candidato = Math.round((Math.random() * 48) + 1);
        if (esRepe(candidato, tirada) === false) {
            tirada[c] = candidato;
        } else {
            c--;
        }
        c++;
    }
    var jugada = tirada.join('\t-\t');
    return jugada;
}

//Al hacer click en el boton, agragara los numeros en el parrafo con el id "generadas"
$(document).ready(function() {
    $("#botonGenera").click(function() {
        var jugada = genera();
        $("#generadas").text(jugada);
    });
});