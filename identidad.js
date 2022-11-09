let n = parseFloat(prompt("introducir otro numero: "));
let x = Math.PI / n;

var a = Math.pow(Math.cos(x / 2), 2);
var b = (Math.tan(x) + Math.sin(x)) / (2 * Math.tan(x));

var uno = a.toFixed(4);
var dos = b.toFixed(4);

document.write("<h3 class=id >" + uno + "</h3>")
document.write("<h3 class=id >" + dos + "</h3>")

//Valor Boleano
var respuesta = Boolean(uno = dos)
document.write("<h2 class=id >" + respuesta + "</h2>")