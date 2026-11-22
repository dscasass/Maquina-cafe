# Maquina-cafe

Maquina dispensadora de cafe y te hecha con HTML, CSS y JavaScript.
El usuario ingresa dinero con el formulario (boton **Abonar**), escoge el producto con los numeros del 1 al 5 y la maquina sirve el pedido y devuelve el cambio.

## Archivos

- `index.html`: la maquina (vitrina, pantalla de saldo, teclado, salidas de cambio y dispensador)
- `styles.css`: los estilos
- `maquina.js`: la logica de la maquina
- `img/`: imagenes de cada producto (aparecen en la vitrina y en el dispensador)


## **ENTRADAS**

#### *Productos/Inventario (valores iniciales):*
- Saldo (variable, Number, $): empieza en 0
- Cafe (variable, Number, g): 500
- Leche (variable, Number, ml): 2000
- Agua (variable, Number, ml): 5000
- Te (variable, Number, g): 100
- Azucar (variable, Number, g): 300
- Vasos (variable, Number, unidades): 30

#### *Dinero/Inventario para dar cambio:*
- Monedas 1000, 500, 200 y 100 (variable, Number, unidades): 20 de cada una
- Billetes 2000 y 5000 (variable, Number, unidades): 10 de cada uno
- Billetes 10000 y 20000 (variable, Number, unidades): 5 de cada uno

#### *Entradas del usuario (en el index):*
- Dinero ingresado (input `balance-input` + boton Abonar, Number, $): maximo $20000 por vez
- Producto elegido (botones 1 al 5, Number)
- Con azucar (confirm "Desea anadir azucar?", Boolean)
- Devolver cambio / cancelar (boton "Devolver cambio" y boton X)

#### *Unidades:*
- PESOS: $
- GRAMOS: g
- MILILITROS: ml


#### Vaso:

Hay un solo tipo de vaso, con capacidad de 150 ml (unos 5 oz). Todas las recetas llenan el vaso:
agua + leche = 150 ml.


#### Productos y recetas:

- 1 Tinto ($2000): 2 g cafe, 150 ml agua
- 2 Americano ($4000): 3 g cafe, 150 ml agua
- 3 Cafe con leche ($3000): 2 g cafe, 50 ml leche, 100 ml agua
- 4 Capuchino ($5000): 3 g cafe, 60 ml leche, 90 ml agua
- 5 Te ($1800): 2 g te, 150 ml agua

*Azucar*

- Si pide azucar se suman $500 al pedido y se gastan 5 g de azucar


## **SALIDAS**

- Cafe o te (aparece la imagen del producto en el dispensador)
- Total del pedido ($)
- Saldo que queda en la pantalla ($)
- Cambio ($)
- Billetes y monedas del cambio (cuantos de cada denominacion, se ven en la consola)
- Stock de cada producto en la vitrina (cuantos se pueden servir todavia)
- Mensajes con alert (saldo insuficiente, producto agotado, no hay cambio suficiente, cambio devuelto)



## REGLAS DE NEGOCIO

- El total del pedido es el precio del producto + el azucar (si la pidio)
- La maquina solo acepta billetes de hasta $20000
- Solo sirve si el saldo alcanza para el total del pedido
- Tiene que haber ingredientes y vasos suficientes
- Lo que no se gasta se queda como saldo; el usuario puede pedir otro producto con ese saldo o devolver el cambio
- El cambio se arma sumando billetes y monedas, empezando por el mas grande (20000, 10000, 5000, 2000, 1000, 500, 200 y 100), hasta que la suma sea igual al cambio
- Si no hay billetes o monedas suficientes, se devuelve lo que se pueda y lo que falta se queda como saldo
- Al servir descuenta los ingredientes y el vaso del inventario
- Al entregar el cambio descuenta los billetes y monedas del inventario de dinero
- Cuando un producto se acaba, su estante de la vitrina se pone gris (clase `is-empty`)



## PSEUDOCODIGO

1. Se declaran las cosas que hay en la maquina: cafe, leche, agua, te, azucar y vasos, con sus cantidades
2. Se declaran los billetes y monedas que tiene la maquina para dar cambio
3. Se declaran los precios y lo que lleva cada producto, y el precio del azucar
4. Se pone el saldo en 0 y se muestra en la pantalla. En la vitrina se muestra cuantos hay de cada producto
5. El usuario escribe cuanta plata mete y da clic en Abonar
    - Si el valor no sirve o es mayor a $20000, la maquina avisa y no lo recibe
    - Si sirve, se suma al saldo y se actualiza la pantalla
6. El usuario da clic en un numero del 1 al 5 para escoger el producto
7. La maquina mira que producto es y guarda su nombre, su precio y lo que necesita
8. La maquina revisa que haya suficiente cafe, te, leche, agua y minimo 1 vaso
    - Si falta algo, avisa "Producto agotado" y vuelve al paso 5
9. La maquina pregunta si quiere azucar
    - Si dice que si y hay azucar, se suman $500 al total
    - Si no hay azucar, avisa y sigue sin ella
10. La maquina mira si el saldo alcanza para pagar el total
    - Si no alcanza, avisa "Saldo insuficiente" y el usuario puede abonar mas (paso 5)
    - Si alcanza, sigue
11. La maquina cobra: le resta el total al saldo y gasta del inventario lo que lleva el pedido (ingredientes, vaso y azucar si la pidio)
12. Sale el producto en el dispensador con su imagen
13. Se actualizan el saldo en la pantalla y el stock de la vitrina
14. Ahora el usuario puede pedir otro producto con el saldo que le queda (paso 6), abonar mas (paso 5) o dar clic en Devolver cambio (o en la X)
15. Para devolver el cambio, la maquina empieza con el billete o moneda mas grande (20000, 10000, 5000, 2000, 1000, 500, 200 y 100). Va dando de ese valor mientras todavia quepa en lo que falta devolver y mientras haya en la maquina. Despues pasa al siguiente. Por ejemplo, para $15800: 10000 + 5000 + 500 + 200 + 100 = 15800
    - Va contando cuantos billetes y monedas da de cada uno
16. La maquina descuenta de su inventario los billetes y monedas que dio y le muestra al usuario el total devuelto (el detalle sale por la consola)
    - Si no alcanzaron los billetes y monedas, avisa "No hay cambio suficiente" y lo que falta se queda como saldo
17. El saldo se actualiza (queda en 0 si se devolvio todo) y la maquina queda lista para otro usuario (vuelve al paso 5)