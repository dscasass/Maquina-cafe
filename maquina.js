// Inventario de productos
let saldo = 0;    // plata que lleva metida el usuario ($)
let cafe = 500;   // gramos (g)
let leche = 2000; // mililitros (ml)
let agua = 5000;  // mililitros (ml)
let te = 100;     // gramos (g)
let azucar = 300; // gramos (g)

// Inventario de vasos (unidades)
let vasosPequenos = 30; // 5 oz
let vasosMedianos = 30; // 7 oz
let vasosGrandes = 30;  // 9 oz

// Monedas y billetes que hay para dar cambio (unidades)
let monedas1000 = 20;
let monedas500 = 20;
let monedas200 = 20;
let monedas100 = 20;
let billetes2000 = 10;
let billetes5000 = 10;
let billetes10000 = 5;
let billetes20000 = 5;

// Tamaños de vaso: lo que se suma al precio ($) y al agua (ml)
const costoPequeno = 0;
const costoMediano = 500;
const costoGrande = 1000;
const aguaExtraPequeno = 0;
const aguaExtraMediano = 60;
const aguaExtraGrande = 120;

// Azucar
const precioAzucar = 200;   // lo que cuesta pedirla ($)
const azucarPorPorcion = 5; // lo que se gasta (g)

// Recetas del vaso pequeno: precio en $, cafe y te en g, leche y agua en ml
const tintoPrecio = 2000;
const tintoCafe = 2;
const tintoAgua = 150;

const americanoPrecio = 2500;
const americanoCafe = 3;
const americanoAgua = 150;

const cafeConLechePrecio = 3000;
const cafeConLecheCafe = 2;
const cafeConLecheLeche = 50;
const cafeConLecheAgua = 100;

const capuchinoPrecio = 3500;
const capuchinoCafe = 3;
const capuchinoLeche = 60;
const capuchinoAgua = 90;

const tePrecio = 1800;
const teCantidad = 2;
const teAgua = 150;

// Lo que hace el usuario (ejemplo de un pedido)
let dineroIngresado = 20000;       // plata que mete: un billete de 20000 ($)
let productoElegido = "capuchino"; // producto que escoge
let tamanoVaso = "mediano";        // pequeno, mediano o grande
let conAzucar = true;              // si quiere azucar o no

// Salidas
let totalPedido = 0;      // lo que cuesta el pedido ($)
let cambio = 0;           // plata que se devuelve ($)
let productoServido = ""; // cafe o te
let mensaje = "";         // saldo insuficiente, producto agotado, no hay cambio o finalizado

// Cambio: cuantos billetes y monedas se entregan de cada denominacion (unidades)
let sumaEntregada = 0;    // lo que llevamos sumado del cambio ($)
let faltaPorDar = 0;      // lo que falta para llegar al cambio ($)
let entregaBilletes20000 = 0;
let entregaBilletes10000 = 0;
let entregaBilletes5000 = 0;
let entregaBilletes2000 = 0;
let entregaMonedas1000 = 0;
let entregaMonedas500 = 0;
let entregaMonedas200 = 0;
let entregaMonedas100 = 0;

// Ejemplo: capuchino mediano con azucar, pagando con un billete de 20000
totalPedido = capuchinoPrecio + costoMediano;
totalPedido = totalPedido + precioAzucar;

// El usuario mete la plata y se calcula el cambio
saldo = saldo + dineroIngresado;
saldo = saldo - totalPedido;
cambio = saldo;
saldo = saldo - cambio;

// Se restan los ingredientes y el vaso del inventario
cafe = cafe - capuchinoCafe;
leche = leche - capuchinoLeche;
agua = agua - capuchinoAgua - aguaExtraMediano;
azucar = azucar - azucarPorPorcion;
vasosMedianos = vasosMedianos - 1;

// El billete de 20000 que metio el usuario queda guardado en la maquina
billetes20000 = billetes20000 + 1;

// Armar el cambio: se suman billetes y monedas de mayor a menor
// hasta que la suma sea igual al cambio (15800 = 10000 + 5000 + 500 + 200 + 100)
sumaEntregada = sumaEntregada + 10000;
entregaBilletes10000 = entregaBilletes10000 + 1;

sumaEntregada = sumaEntregada + 5000;
entregaBilletes5000 = entregaBilletes5000 + 1;

sumaEntregada = sumaEntregada + 500;
entregaMonedas500 = entregaMonedas500 + 1;

sumaEntregada = sumaEntregada + 200;
entregaMonedas200 = entregaMonedas200 + 1;

sumaEntregada = sumaEntregada + 100;
entregaMonedas100 = entregaMonedas100 + 1;

// Si la suma llego al cambio, no falta nada por dar
faltaPorDar = cambio - sumaEntregada;

// Se restan del inventario los billetes y monedas entregados
billetes20000 = billetes20000 - entregaBilletes20000;
billetes10000 = billetes10000 - entregaBilletes10000;
billetes5000 = billetes5000 - entregaBilletes5000;
billetes2000 = billetes2000 - entregaBilletes2000;
monedas1000 = monedas1000 - entregaMonedas1000;
monedas500 = monedas500 - entregaMonedas500;
monedas200 = monedas200 - entregaMonedas200;
monedas100 = monedas100 - entregaMonedas100;

mensaje = "Finalizado";

console.log("Total del pedido: $" + totalPedido);
console.log("Cambio: $" + cambio);
console.log("Billetes de 20000: " + entregaBilletes20000);
console.log("Billetes de 10000: " + entregaBilletes10000);
console.log("Billetes de 5000: " + entregaBilletes5000);
console.log("Billetes de 2000: " + entregaBilletes2000);
console.log("Monedas de 1000: " + entregaMonedas1000);
console.log("Monedas de 500: " + entregaMonedas500);
console.log("Monedas de 200: " + entregaMonedas200);
console.log("Monedas de 100: " + entregaMonedas100);
console.log("Suma entregada: $" + sumaEntregada);
console.log("Falta por dar: $" + faltaPorDar);
console.log(mensaje);
