
//  Inventario 
let saldo = 0;      // plata que lleva metida el usuario ($)
let cafe = 500;     // g
let leche = 2000;   // ml
let agua = 5000;    // ml
let te = 100;       // g
let azucar = 300;   // g
let vasos = 30;     // unidades

//  Monedas y billetes para dar cambio 
let monedas1000 = 20;
let monedas500 = 20;
let monedas200 = 20;
let monedas100 = 20;
let billetes2000 = 10;
let billetes5000 = 10;
let billetes10000 = 5;
let billetes20000 = 5;

//  Azucar 
const precioAzucar = 500;
const azucarPorPorcion = 5;

//  Recetas (el orden de los numeros es el del index.html)
// 1 Tinto, 2 Americano, 3 Cafe con leche, 4 Capuchino, 5 Te
const tintoPrecio = 2000;
const tintoCafe = 2;
const tintoAgua = 150;

const capuchinoPrecio = 5000;
const capuchinoCafe = 3;
const capuchinoLeche = 60;
const capuchinoAgua = 90;

const americanoPrecio = 4000;
const americanoCafe = 3;
const americanoAgua = 150;

const cafeConLechePrecio = 3000;
const cafeConLecheCafe = 2;
const cafeConLecheLeche = 50;
const cafeConLecheAgua = 100;

const tePrecio = 1800;
const teCantidad = 2;
const teAgua = 150;

//  Lo que se necesita en cada pedido 
let nombreProducto = "";
let totalPedido = 0;
let cafeNecesario = 0;
let aguaNecesaria = 0;
let lecheNecesaria = 0;
let teNecesario = 0;
let productoServido = "";
let contenidoVaso = 0;

//  Elementos del HTML (con id) 
const pantallaSaldo = document.getElementById("credit");
const formulario = document.getElementById("balance-form");
const inputDinero = document.getElementById("balance-input");
const dispensador = document.getElementById("dispenser");



// FUNCIONES

// Muestra el saldo en la pantalla de la maquina
function mostrarSaldo() {
  pantallaSaldo.textContent = "$" + saldo;
}

// Cuantos pedidos se pueden hacer con lo que hay (restando, sin Math.floor)
function cuantosAlcanzan(disponible, necesario) {
  let cantidad = 0;
  if (necesario === 0) {
    return vasos;
  }
  while (disponible >= necesario) {
    disponible = disponible - necesario;
    cantidad = cantidad + 1;
  }
  if (cantidad > vasos) {
    cantidad = vasos;
  }
  return cantidad;
}

// Pone el stock en cada estante de la vitrina
function mostrarStock() {
  let stock1 = cuantosAlcanzan(cafe, tintoCafe);
  let stock2 = cuantosAlcanzan(cafe, americanoCafe);
  let stock3 = cuantosAlcanzan(cafe, cafeConLecheCafe);
  let stock4 = cuantosAlcanzan(cafe, capuchinoCafe);
  let stock5 = cuantosAlcanzan(te, teCantidad);

  // Ademas del cafe, tambien limitan el agua y la leche
  if (cuantosAlcanzan(agua, tintoAgua) < stock1) { stock1 = cuantosAlcanzan(agua, tintoAgua); }
  if (cuantosAlcanzan(agua, americanoAgua) < stock2) { stock2 = cuantosAlcanzan(agua, americanoAgua); }
  if (cuantosAlcanzan(agua, cafeConLecheAgua) < stock3) { stock3 = cuantosAlcanzan(agua, cafeConLecheAgua); }
  if (cuantosAlcanzan(leche, cafeConLecheLeche) < stock3) { stock3 = cuantosAlcanzan(leche, cafeConLecheLeche); }
  if (cuantosAlcanzan(agua, capuchinoAgua) < stock4) { stock4 = cuantosAlcanzan(agua, capuchinoAgua); }
  if (cuantosAlcanzan(leche, capuchinoLeche) < stock4) { stock4 = cuantosAlcanzan(leche, capuchinoLeche); }
  if (cuantosAlcanzan(agua, teAgua) < stock5) { stock5 = cuantosAlcanzan(agua, teAgua); }

  document.querySelector('[data-product="1"] .shelf__stock b').textContent = stock1;
  document.querySelector('[data-product="2"] .shelf__stock b').textContent = stock2;
  document.querySelector('[data-product="3"] .shelf__stock b').textContent = stock3;
  document.querySelector('[data-product="4"] .shelf__stock b').textContent = stock4;
  document.querySelector('[data-product="5"] .shelf__stock b').textContent = stock5;

  // Si no queda, el CSS lo pone gris con la clase is-empty
  document.querySelector('[data-product="1"]').classList.toggle("is-empty", stock1 === 0);
  document.querySelector('[data-product="2"]').classList.toggle("is-empty", stock2 === 0);
  document.querySelector('[data-product="3"]').classList.toggle("is-empty", stock3 === 0);
  document.querySelector('[data-product="4"]').classList.toggle("is-empty", stock4 === 0);
  document.querySelector('[data-product="5"]').classList.toggle("is-empty", stock5 === 0);
}

// Devuelve plata: arma el cambio con billetes y monedas (while restando)
function darCambio(cambio) {
  let totalCambio = cambio;

  let b20000 = 0;
  let b10000 = 0;
  let b5000 = 0;
  let b2000 = 0;
  let m1000 = 0;
  let m500 = 0;
  let m200 = 0;
  let m100 = 0;

  while (cambio >= 20000 && billetes20000 > 0) {
    cambio = cambio - 20000;
    billetes20000 = billetes20000 - 1;
    b20000 = b20000 + 1;
  }
  while (cambio >= 10000 && billetes10000 > 0) {
    cambio = cambio - 10000;
    billetes10000 = billetes10000 - 1;
    b10000 = b10000 + 1;
  }
  while (cambio >= 5000 && billetes5000 > 0) {
    cambio = cambio - 5000;
    billetes5000 = billetes5000 - 1;
    b5000 = b5000 + 1;
  }
  while (cambio >= 2000 && billetes2000 > 0) {
    cambio = cambio - 2000;
    billetes2000 = billetes2000 - 1;
    b2000 = b2000 + 1;
  }
  while (cambio >= 1000 && monedas1000 > 0) {
    cambio = cambio - 1000;
    monedas1000 = monedas1000 - 1;
    m1000 = m1000 + 1;
  }
  while (cambio >= 500 && monedas500 > 0) {
    cambio = cambio - 500;
    monedas500 = monedas500 - 1;
    m500 = m500 + 1;
  }
  while (cambio >= 200 && monedas200 > 0) {
    cambio = cambio - 200;
    monedas200 = monedas200 - 1;
    m200 = m200 + 1;
  }
  while (cambio >= 100 && monedas100 > 0) {
    cambio = cambio - 100;
    monedas100 = monedas100 - 1;
    m100 = m100 + 1;
  }

  // PROCESO INTERNO (solo consola)
  console.log("Total devuelto: $" + (totalCambio - cambio));
  if (b20000 > 0) { console.log(b20000 + " billete(s) de $20000"); }
  if (b10000 > 0) { console.log(b10000 + " billete(s) de $10000"); }
  if (b5000 > 0)  { console.log(b5000 + " billete(s) de $5000"); }
  if (b2000 > 0)  { console.log(b2000 + " billete(s) de $2000"); }
  if (m1000 > 0)  { console.log(m1000 + " moneda(s) de $1000"); }
  if (m500 > 0)   { console.log(m500 + " moneda(s) de $500"); }
  if (m200 > 0)   { console.log(m200 + " moneda(s) de $200"); }
  if (m100 > 0)   { console.log(m100 + " moneda(s) de $100"); }

  // LO QUE VE EL USUARIO: solo el total
  if (cambio > 0) {
    console.log("No hay monedas/billetes para dar $" + cambio);
    alert("No hay cambio suficiente. Se devolvieron $" + (totalCambio - cambio));
  } else {
    alert("Se devolvieron $" + totalCambio + " de cambio");
  }

  // Lo que no se pudo devolver se queda como saldo
  saldo = cambio;
  mostrarSaldo();
}

// Se llama cuando el usuario toca un numero (1 a 5)
function pedirProducto(codigo) {

  // Todo empieza desde 0
  totalPedido = 0;
  cafeNecesario = 0;
  aguaNecesaria = 0;
  lecheNecesaria = 0;
  teNecesario = 0;
  productoServido = "";
  contenidoVaso = 0;

  // 1. Elegir producto
  switch (codigo) {

    case 1:
      nombreProducto = "Tinto";
      totalPedido = tintoPrecio;
      cafeNecesario = tintoCafe;
      aguaNecesaria = tintoAgua;
      productoServido = "cafe";
      break;

    case 2:
      nombreProducto = "Americano";
      totalPedido = americanoPrecio;
      cafeNecesario = americanoCafe;
      aguaNecesaria = americanoAgua;
      productoServido = "cafe";
      break;

    case 3:
      nombreProducto = "Cafe con leche";
      totalPedido = cafeConLechePrecio;
      cafeNecesario = cafeConLecheCafe;
      aguaNecesaria = cafeConLecheAgua;
      lecheNecesaria = cafeConLecheLeche;
      productoServido = "cafe";
      break;

    case 4:
      nombreProducto = "Capuchino";
      totalPedido = capuchinoPrecio;
      cafeNecesario = capuchinoCafe;
      aguaNecesaria = capuchinoAgua;
      lecheNecesaria = capuchinoLeche;
      productoServido = "cafe";
      break;

    case 5:
      nombreProducto = "Te";
      totalPedido = tePrecio;
      teNecesario = teCantidad;
      aguaNecesaria = teAgua;
      productoServido = "te";
      break;
  }

  alert(nombreProducto + " - Precio: $" + totalPedido);

  // 2. Revisar que haya ingredientes
  if (cafe < cafeNecesario || te < teNecesario || agua < aguaNecesaria || leche < lecheNecesaria || vasos < 1) {
    alert("Producto agotado");
    return;
  }

  // 3. Azucar
  let conAzucar = confirm("¿Desea añadir azucar? (+$" + precioAzucar + ")");

  if (conAzucar === true) {
    if (azucar >= azucarPorPorcion) {
      totalPedido = totalPedido + precioAzucar;
    } else {
      alert("No hay azucar suficiente");
      conAzucar = false;
    }
  }

  // 4. Cobrar (usa el saldo que el usuario ya abono)
  if (saldo < totalPedido) {
    alert("Saldo insuficiente. Debe pagar $" + totalPedido + " y tiene $" + saldo);
    return;
  }

  // 5. Servir: se gasta el inventario
  saldo = saldo - totalPedido;
  cafe = cafe - cafeNecesario;
  te = te - teNecesario;
  agua = agua - aguaNecesaria;
  leche = leche - lecheNecesaria;
  vasos = vasos - 1;

  if (conAzucar === true) {
    azucar = azucar - azucarPorPorcion;
  }

  contenidoVaso = aguaNecesaria + lecheNecesaria;

  // Sale en el dispensador de la maquina
  dispensador.textContent = nombreProducto + " - " + contenidoVaso + " ml";
  dispensador.style.color = "white";
  dispensador.style.fontWeight = "bold";

  alert("Su " + productoServido + " esta listo: " + contenidoVaso + " ml");

  mostrarSaldo();
  mostrarStock();
}

// Boton "Devolver cambio" y boton X
function devolverSaldo() {
  if (saldo > 0) {
    darCambio(saldo);
  } else {
    alert("No hay saldo para devolver");
  }
  dispensador.textContent = "";
}


// CONECTAR BOTONES 


// Boton "Abonar" (el formulario)
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // para que no recargue la pagina

  let dinero = parseInt(inputDinero.value);

  if (isNaN(dinero) || dinero <= 0) {
    alert("Ingrese un valor valido");
  } else if (dinero > 20000) {
    alert("Solo se aceptan billetes hasta $20000 (ಠ_ರೃ)");
  } else {
    saldo = saldo + dinero;
    mostrarSaldo();
  }

  inputDinero.value = "";
});

// Botones 1 al 5 (data-select)
document.querySelector('[data-select="1"]').addEventListener("click", function () { pedirProducto(1); });
document.querySelector('[data-select="2"]').addEventListener("click", function () { pedirProducto(2); });
document.querySelector('[data-select="3"]').addEventListener("click", function () { pedirProducto(3); });
document.querySelector('[data-select="4"]').addEventListener("click", function () { pedirProducto(4); });
document.querySelector('[data-select="5"]').addEventListener("click", function () { pedirProducto(5); });

// Boton X (cancelar) y boton Devolver cambio (data-action)
document.querySelector('[data-action="cancel"]').addEventListener("click", devolverSaldo);
document.querySelector('[data-action="return-change"]').addEventListener("click", devolverSaldo);

// Al abrir la pagina
mostrarSaldo();
mostrarStock();



/*
// Ejemplo: capuchino con azucar, pagando con un billete de 20000
totalPedido = capuchinoPrecio;
totalPedido = totalPedido + precioAzucar;

// El usuario mete la plata y se calcula el cambio
saldo = saldo + dineroIngresado;
saldo = saldo - totalPedido;
cambio = saldo;
saldo = saldo - cambio;

// Se restan los ingredientes y el vaso del inventario
cafe = cafe - capuchinoCafe;
leche = leche - capuchinoLeche;
agua = agua - capuchinoAgua;
azucar = azucar - azucarPorPorcion;
vasos = vasos - 1;

// Lo que lleva el vaso segun la receta (cabe en capacidadVaso)
productoServido = "cafe";
contenidoVaso = capuchinoCapacidad;

// El billete de 20000 que metio el usuario queda guardado en la maquina
billetes20000 = billetes20000 + 1;

// Armar el cambio: se suman billetes y monedas de mayor a menor
// hasta que la suma sea igual al cambio (16300 = 10000 + 5000 + 1000 + 200 + 100)
sumaEntregada = sumaEntregada + 10000;
entregaBilletes10000 = entregaBilletes10000 + 1;

sumaEntregada = sumaEntregada + 5000;
entregaBilletes5000 = entregaBilletes5000 + 1;

sumaEntregada = sumaEntregada + 1000;
entregaMonedas1000 = entregaMonedas1000 + 1;

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
*/