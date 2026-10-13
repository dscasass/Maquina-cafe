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
let billetes2000 = 10;
let billetes5000 = 10;
let billetes10000 = 5;
let billetes20000 = 5;

// Tamanos de vaso: lo que se suma al precio ($) y al agua (ml)
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
let dineroIngresado = 5000;        // plata que mete ($)
let productoElegido = "capuchino"; // producto que escoge
let tamanoVaso = "mediano";        // pequeno, mediano o grande
let conAzucar = true;              // si quiere azucar o no

// Salidas
let totalPedido = 0;      // lo que cuesta el pedido ($)
let cambio = 0;           // plata que se devuelve ($)
let productoServido = ""; // cafe o te
let mensaje = "";         // saldo insuficiente, producto agotado, no hay cambio o finalizado

// Ejemplo con suma y resta: capuchino mediano con azucar
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

console.log("Total del pedido: $" + totalPedido);
console.log("Cambio: $" + cambio);
