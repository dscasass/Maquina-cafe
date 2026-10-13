// Inventario de productos
let saldo = 0;    // plata que lleva metida el usuario ($)
let cafe = 500;   // gramos (g)
let leche = 2000; // mililitros (ml)
let agua = 5000;  // mililitros (ml)
let te = 100;     // gramos (g)
let azucar = 300; // gramos (g)

// Inventario de vasos por tamano (unidades)
let vasos = { pequeno: 30, mediano: 30, grande: 30 };

// Denominaciones de monedas y billetes ($)
const monedas = [1000, 500, 200];
const billetes = [2000, 5000, 10000, 20000];

// Cuantas monedas y billetes hay para dar cambio (unidades)
let cantidadMonedas = { 1000: 20, 500: 20, 200: 20 };
let cantidadBilletes = { 2000: 10, 5000: 10, 10000: 5, 20000: 5 };

// Tamanos de vaso: lo que se suma al precio ($) y al agua (ml)
const tamanos = {
  pequeno: { costoExtra: 0,    aguaExtra: 0 },   // 5 oz
  mediano: { costoExtra: 500,  aguaExtra: 60 },  // 7 oz
  grande:  { costoExtra: 1000, aguaExtra: 120 }, // 9 oz
};

// Extras
const precioAzucar = 200;   // lo que cuesta pedir azucar ($)
const azucarPorPorcion = 5; // azucar que se gasta (g)

// Recetas del vaso pequeno: precio en $, cafe y te en g, leche y agua en ml
const recetas = {
  tinto:        { precio: 2000, cafe: 2, te: 0, leche: 0,  agua: 150 },
  americano:    { precio: 2500, cafe: 3, te: 0, leche: 0,  agua: 150 },
  cafeConLeche: { precio: 3000, cafe: 2, te: 0, leche: 50, agua: 100 },
  capuchino:    { precio: 3500, cafe: 3, te: 0, leche: 60, agua: 90 },
  te:           { precio: 1800, cafe: 0, te: 2, leche: 0,  agua: 150 },
};

// Lo que hace el usuario (ejemplo de un pedido)
let dineroIngresado = 5000;     // plata que mete ($)
let productoElegido = "capuchino"; // producto que escoge
let tamanoVaso = "mediano";     // pequeno, mediano o grande
let conAzucar = true;           // si quiere azucar o no

// Salidas
let totalPedido = 0;      // lo que cuesta el pedido ($)
let cambio = 0;           // plata que se devuelve ($)
let productoServido = ""; // cafe o te
let mensaje = "";

// Buscamos la receta y el tamano que eligio el usuario
const receta = recetas[productoElegido];
const vaso = tamanos[tamanoVaso];

// Total del pedido: precio del producto + lo del tamano
totalPedido = receta.precio + vaso.costoExtra;

// Si pidio azucar se suma su precio y se resta del inventario
if (conAzucar) {
  totalPedido = totalPedido + precioAzucar;
  azucar = azucar - azucarPorPorcion;
}

// El usuario mete la money  y se calcula el cambio
saldo = saldo + dineroIngresado;
saldo = saldo - totalPedido;
cambio = saldo;
saldo = saldo - cambio;

// Se restan los ingredientes y el vaso del inventario
cafe = cafe - receta.cafe;
te = te - receta.te;
leche = leche - receta.leche;
agua = agua - receta.agua - vaso.aguaExtra;
vasos[tamanoVaso] = vasos[tamanoVaso] - 1;

console.log("Total del pedido: $" + totalPedido);
console.log("Cambio: $" + cambio);
