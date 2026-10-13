// Inventario de productos
let saldo = 0;    // plata que lleva metida el usuario ($)
let cafe = 500;   // gramos (g)
let leche = 2000; // mililitros (ml)
let agua = 5000;  // mililitros (ml)
let vasos = 50;   // unidades
let te = 100;     // gramos (g)
let azucar = 300; // gramos (g)

// Denominaciones de monedas y billetes ($)
const monedas = [1000, 500, 200];
const billetes = [2000, 5000, 10000, 20000];

// Cuantas monedas y billetes hay para dar cambio (unidades)
let cantidadMonedas = { 1000: 20, 500: 20, 200: 20 };
let cantidadBilletes = { 2000: 10, 5000: 10, 10000: 5, 20000: 5 };

// Lo que hace el usuario
let dineroIngresado = 0;    // plata que mete ($)
let productoElegido = "";   // producto que escoge
let conAzucar = false;      // si quiere azucar o no
const azucarPorPorcion = 5; // azucar que se gasta si la pide (g)

// Recetas por porcion: precio en $, cafe y te en g, leche y agua en ml, vasos en unidades
const recetas = {
  tinto:        { precio: 1000, cafe: 8,  te: 0, leche: 0,   agua: 120, vasos: 1 },
  americano:    { precio: 1500, cafe: 10, te: 0, leche: 0,   agua: 180, vasos: 1 },
  cafeConLeche: { precio: 2000, cafe: 8,  te: 0, leche: 60,  agua: 90,  vasos: 1 },
  capuchino:    { precio: 2500, cafe: 9,  te: 0, leche: 100, agua: 60,  vasos: 1 },
  te:           { precio: 1200, cafe: 0,  te: 2, leche: 0,   agua: 150, vasos: 1 },
};

// Salidas
let productoServido = ""; // cafe o te
let cambio = 0;           // plata que se devuelve ($)
let mensaje = "";         // saldo insuficiente, producto agotado o no hay cambio
