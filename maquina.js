


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

productoElegido = prompt(
  "Seleccione un producto: Tinto, Americano, Cafe con leche, Capuchino o Te"
);

switch (productoElegido) {

  case "1":
    totalPedido = tintoPrecio;
    cafeNecesario = tintoCafe;
    aguaNecesaria = tintoAgua;
    lecheNecesaria = 0;
    break;

  case "2":
    totalPedido = americanoPrecio;
    cafeNecesario = americanoCafe;
    aguaNecesaria = americanoAgua;
    lecheNecesaria = 0;
    break;

  case "2":
    totalPedido = cafeConLechePrecio;
    cafeNecesario = cafeConLecheCafe;
    aguaNecesaria = cafeConLecheAgua;
    lecheNecesaria = cafeConLecheLeche;
    break;

  case "3":
    totalPedido = capuchinoPrecio;
    cafeNecesario = capuchinoCafe;
    aguaNecesaria = capuchinoAgua;
    lecheNecesaria = capuchinoLeche;
    break;

  case "4":
    totalPedido = tePrecio;
    cafeNecesario = 0;
    aguaNecesaria = teAgua;
    lecheNecesaria = 0;
    break;

  default:
    totalPedido = 0;
    mensaje = "Producto no valido";
}


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

    

//Menu
let menu =parseInt(prompt("Elige una opcion"));

switch (menu) {
    case 1:
        alert("Tinto");
      totalPedido = tintoPrecio;
      console.log("tintoAgua")

//este calcula cuánto cuesta el pedido cuando eligieron tinto.
if (productoElegido === "tinto") {
  totalPedido = tintoPrecio;
}
  if (conAzucar === true) {
    totalPedido = totalPedido + precioAzucar;
    
  }
        break;
        case 2:
         alert("Americano");
      totalPedido = americanoPrecio;
      console.log("americano")

      break;
        case 3:
         alert("Cafe con leche");
      totalPedido = cafeConLechePrecio;
      console.log("Cafe con leche")

      break;
        case 4:
         alert("Capuchino");
      totalPedido = capuchinoPrecio;
      console.log("Capuchino")

      break;
        case 5:
         alert("Te");
      totalPedido = tintoPrecio;
      console.log("Te")

    default:
        break;
}



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
