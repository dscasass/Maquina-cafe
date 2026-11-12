// Inventario de productos
let saldo = 0;    // plata que lleva metida el usuario ($)
let cafe = 500;   // gramos (g)
let leche = 2000; // mililitros (ml)
let agua = 5000;  // mililitros (ml)
let te = 100;     // gramos (g)
let azucar = 300; // gramos (g)

// Vaso (un solo tipo)
let vasos = 30;                // unidades disponibles
const capacidadVaso = 150;     // lo que le cabe al vaso (ml)

// Monedas y billetes que hay para dar cambio (unidades)
let monedas1000 = 20;
let monedas500 = 20;
let monedas200 = 20;
let monedas100 = 20;
let billetes2000 = 10;
let billetes5000 = 10;
let billetes10000 = 5;
let billetes20000 = 5;

// Azucar
const precioAzucar = 200;   // lo que cuesta pedirla ($)
const azucarPorPorcion = 5; // lo que se gasta (g)

// Recetas: precio en $, cafe y te en g, leche y agua en ml
// "Capacidad" = lo que lleva el vaso de ese producto segun la receta (ml)
const tintoPrecio = 2000;
const tintoCafe = 2;
const tintoAgua = 150;
const tintoCapacidad = 150;          // 150 de agua

const americanoPrecio = 2500;
const americanoCafe = 3;
const americanoAgua = 150;
const americanoCapacidad = 150;      // 150 de agua

const cafeConLechePrecio = 3000;
const cafeConLecheCafe = 2;
const cafeConLecheLeche = 50;
const cafeConLecheAgua = 100;
const cafeConLecheCapacidad = 150;   // 50 de leche + 100 de agua

const capuchinoPrecio = 3500;
const capuchinoCafe = 3;
const capuchinoLeche = 60;
const capuchinoAgua = 90;
const capuchinoCapacidad = 150;      // 60 de leche + 90 de agua

const tePrecio = 1800;
const teCantidad = 2;
const teAgua = 150;
const teCapacidad = 150;             // 150 de agua

// Lo que hace el usuario (ejemplo de un pedido)
let dineroIngresado = 20000;       // plata que mete: un billete de 20000 ($)
let productoElegido = "capuchino"; // producto que escoge
let conAzucar = true;              // si quiere azucar o no

// Salidas
let totalPedido = 0;      // lo que cuesta el pedido ($)
let cambio = 0;           // plata que se devuelve ($)
let productoServido = ""; // cafe o te
let contenidoVaso = 0;    // lo que lleva el vaso servido (ml)
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



let cafeNecesario = 0;
let aguaNecesaria = 0 ;
let lecheNecesaria = 0 ;


//cambio money money

function darCambio(cambio) {
  let b20000 = 0;
  let b10000 = 0;
  let b5000 = 0;
  let b2000 = 0;
  let m1000 = 0;
  let m500 = 0;
  let m200 = 0;
  let m100 = 0;

  while (cambio >= 20000) {
    cambio = cambio - 20000;
    b20000 = b20000 + 1;
  }
  while (cambio >= 10000) {
    cambio = cambio - 10000;
    b10000 = b10000 + 1;
  }
  while (cambio >= 5000) {
    cambio = cambio - 5000;
    b5000 = b5000 + 1;
  }
  while (cambio >= 2000) {
    cambio = cambio - 2000;
    b2000 = b2000 + 1;
  }
  while (cambio >= 1000) {
    cambio = cambio - 1000;
    m1000 = m1000 + 1;
  }
  while (cambio >= 500) {
    cambio = cambio - 500;
    m500 = m500 + 1;
  }
  while (cambio >= 200) {
    cambio = cambio - 200;
    m200 = m200 + 1;
  }
  while (cambio >= 100) {
    cambio = cambio - 100;
    m100 = m100 + 1;
  }

  alert(
    "Su cambio:" +
    b20000 + " billetes de 20000" +
    b10000 + " billetes de 10000" +
    b5000 + " billetes de 5000" +
    b2000 + " billetes de 2000" +
    m1000 + " monedas de 1000" +
    m500 + " monedas de 500" +
    m200 + " monedas de 200" +
    m100 + " monedas de 100"
  );
}


 // 1. Elegir producto
  productoElegido = prompt(
    "Seleccione un producto:\n1. Tinto\n2. Americano\n3. Cafe con leche\n4. Capuchino\n5. Te\n0. Apagar"
  );

  switch (productoElegido) {

    case "1":
      alert("Tinto - Precio: $" + tintoPrecio);
      totalPedido = tintoPrecio;
      cafeNecesario = tintoCafe;
      aguaNecesaria = tintoAgua;
      productoServido = "cafe";
      break;

    case "2":
      alert("Americano - Precio: $" + americanoPrecio);
      totalPedido = americanoPrecio;
      cafeNecesario = americanoCafe;
      aguaNecesaria = americanoAgua;
      productoServido = "cafe";
      break;

    case "3":
      alert("Cafe con leche - Precio: $" + cafeConLechePrecio);
      totalPedido = cafeConLechePrecio;
      cafeNecesario = cafeConLecheCafe;
      aguaNecesaria = cafeConLecheAgua;
      lecheNecesaria = cafeConLecheLeche;
      productoServido = "cafe";
      break;

    case "4":
      alert("Capuchino - Precio: $" + capuchinoPrecio);
      totalPedido = capuchinoPrecio;
      cafeNecesario = capuchinoCafe;
      aguaNecesaria = capuchinoAgua;
      lecheNecesaria = capuchinoLeche;
      productoServido = "cafe";
      break;

    case "5":
      alert("Te - Precio: $" + tePrecio);
      totalPedido = tePrecio;
      teNecesario = teCantidad;
      aguaNecesaria = teAgua;
      productoServido = "te";
      break;

    case "0":
    case null:
      seguir = false;
      break;

    default:
      alert("Producto no valido");
  }

  // Solo sigue si escogio un producto
  if (totalPedido > 0) {

    alert("Procesando pedido...");


if (
  cafe < cafeNecesario ||
  agua < aguaNecesaria ||
  leche < lecheNecesaria ||
  vasos < 1
) {

  mensaje = "Producto agotado";

} else {

  mensaje = "Hay ingredientes suficientes :(";

}



function calcularDinero() {

  dineroIngresado = parseInt(prompt("Ingrese el dinero"));

  if (dineroIngresado < totalPedido) {

    mensaje = "Saldo insuficiente";
    return -1;

  } else {

    cambio = dineroIngresado - totalPedido;

    return cambio;

  }}




if (mensaje === "Hay ingredientes suficientes") {

  conAzucar = anadirAzucar();

  if (conAzucar === true) {

    if (azucar >= azucarPorPorcion) {

      totalPedido = totalPedido + precioAzucar;

    } else {

      mensaje = "No hay azucar suficiente";

    }

  }

  //ingredientes

  if (mensaje === "Hay ingredientes suficientes") {

    cambio = calcularDinero();

    if (cambio !== -1) {

      cafe = cafe - cafeNecesario;
      agua = agua - aguaNecesaria;
      leche = leche - lecheNecesaria;
      vasos = vasos - 1;

  }

  // ESTO ES DE AZUCAR

function añadirAzucar() {
      return confirm("¿Desea añadir azucar?");
 }

    conAzucar = añadirAzucar();

    if (conAzucar === true) {
      totalPedido = totalPedido + precioAzucar;
      azucar = azucar - azucarPorPorcion;

    }


      alert("Pedido finalizado");
      alert("Total: $" + totalPedido);
      alert("Su cambio es: $" + cambio);

    }

  }










if(productoElegido === "Tinto")
  totalPedido = tintoPrecio;
  cafeNecesario = tintoCafe;
  aguaNecesaria = tintoAgua;
  lecheCecesaria = 0;

    




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
