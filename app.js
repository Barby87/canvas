var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick); // (evento click, se referencia la función)

var d = document.getElementById('dibujito');
var ancho = d.clientWidth; // Se està obteniendo el ancho del canvas de html
var lienzo = d.getContext('2d'); // getContext es un mètodo del objeto canvas, que me permite obtener el area donde voy a dibujar, en contexto 2d


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) // Declaro 5 variables (pràmetros) dentro de una funciòn
{
    lienzo.beginPath(); // Arrancar un trazo
    lienzo.strokeStyle = color; // Elegir color de la línea, strokeStyle es un atributo (propiedad) del objeto lienzo
    lienzo.moveTo(xInicial, yInicial); // Mover el lápiz a coordenada 100, 100
    lienzo.lineTo(xFinal, yFinal); // Función de trazar una línea de (100, 100) a 200, 200
    lienzo.stroke(); // stroke dibuja la línea
    lienzo. closePath(); // Levantar el lápiz (cerrar el trazo)
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0; // Variable que contará las líneas
    var yi, xf; // Variables que van cambiando cada vez que el valor de l cambia
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

    while(l < lineas) // for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300); // Se utiliza la funciòn dibujarLinea y se le asignan valoresa los parámetros
        console.log('Linea ' + l);
        l++; // Sumando una lìnea, para que el ciclo termine
    }

    dibujarLinea(colorcito, 1, 1, 1, 299); // Línea vertical
    dibujarLinea(colorcito, 1, 299, 299, 299); // Línea horizontal

}
 