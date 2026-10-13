# Maquina-cafe

## **ENTRADAS**

#### *Productos/Inventario:*
- Saldo (variable, Number, $)
- Cafe (variable, Number, g)
- Leche (variable, Number, ml)
- Agua (variable, Number, ml)
- Te (variable, Number, g)
- Azucar (variable, Number, g)
- Vasos pequenos (variable, Number, unidades)
- Vasos medianos (variable, Number, unidades)
- Vasos grandes (variable, Number, unidades)

#### *Dinero/ Inventario:*
- Monedas 1000 500 200 (variable, Number, unidades: cuantas hay de cada una para dar cambio)
- Billetes 2000 5000 10000 20000 (variable, Number, unidades: cuantos hay de cada uno para dar cambio)

#### *Entradas del usuario:*
- Dinero ingresado (entrada, Number, $)
- Producto elegido (entrada, String)
- Tamano del vaso (entrada, String: pequeno, mediano o grande)
- Con azucar (entrada, Boolean)

#### *Unidades:*
- PESOS: $
- GRAMOS: g
- MILILITROS: ml
- ONZAS (tamano del vaso): oz


#### Tamanos de vaso:

- Vaso pequeno (5 oz): +$0 y +0 ml agua
- Vaso mediano (7 oz): +$500 y +60 ml agua
- Vaso grande (9 oz): +$1000 y +120 ml agua


#### Recetas:

*Vaso pequeno*

- 1 vaso pequeno Tinto ($2000): 2 g cafe, 150 ml agua
- 1 vaso pequeno Americano ($2500): 3 g cafe, 150 ml agua
- 1 vaso pequeno Cafe con leche ($3000): 2 g cafe, 50 ml leche, 100 ml agua
- 1 vaso pequeno Capuchino ($3500): 3 g cafe, 60 ml leche, 90 ml agua
- 1 vaso pequeno Te ($1800): 2 g te, 150 ml agua


*Vaso mediano*

- 1 vaso mediano Tinto ($2500): 2 g cafe, 210 ml agua
- 1 vaso mediano Americano ($3000): 3 g cafe, 210 ml agua
- 1 vaso mediano Cafe con leche ($3500): 2 g cafe, 50 ml leche, 160 ml agua
- 1 vaso mediano Capuchino ($4000): 3 g cafe, 60 ml leche, 150 ml agua
- 1 vaso mediano Te ($2300): 2 g te, 210 ml agua

*Vaso grande*

- 1 vaso grande Tinto ($3000): 2 g cafe, 270 ml agua
- 1 vaso grande Americano ($3500): 3 g cafe, 270 ml agua
- 1 vaso grande Cafe con leche ($4000): 2 g cafe, 50 ml leche, 220 ml agua
- 1 vaso grande Capuchino ($4500): 3 g cafe, 60 ml leche, 210 ml agua
- 1 vaso grande Te ($2800): 2 g te, 270 ml agua


*Azucar*

- Si pide azucar se suman $200 y se gastan 5 g mas


## **SALIDAS**

- Cafe o te
- Total del pedido ($)
- Cambio ($)
- Mensajes (saldo insuficiente, producto agotado, no hay cambio, Finalizado)



## REGLAS DE NEGOCIO

- El total del pedido es el precio del producto + lo del tamano del vaso + el azucar (si la pidio)
- Solo sirve si el saldo alcanza para el total del pedido
- Tiene que haber ingredientes y vaso del tamano elegido suficientes
- Si sobra plata devuelve cambio, solo si tiene con que darlo
- Al servir descuenta los ingredientes y el vaso del inventario



## PSEUDOCODIGO

1. Se declaran las variables del inventario (cafe, leche, agua, te, azucar) y los vasos de cada tamano con sus cantidades iniciales
2. Se declaran las monedas y billetes que tiene la maquina para dar cambio
3. Se declaran las recetas con el precio y los ingredientes de cada producto, los tamanos de vaso y el precio del azucar
4. Se pone el saldo en 0
5. La maquina muestra los productos disponibles con su precio y los tamanos de vaso
6. El usuario elige el producto que quiere y la maquina lo lee como productoElegido
7. El usuario elige el tamano del vaso y la maquina lo lee como tamanoVaso
8. La maquina pregunta si lo quiere con azucar y lee la respuesta (si o no)
9. La maquina busca la receta del producto y calcula el total del pedido: totalPedido = precio del producto + costo extra del tamano. Si pidio azucar, totalPedido = totalPedido + precio del azucar
10. El usuario mete dinero (moneda o billete) y la maquina lo lee como dineroIngresado
11. La maquina suma el dineroIngresado al saldo: saldo = saldo + dineroIngresado
12. Se compara el saldo con el totalPedido
    * Si el saldo es menor, la maquina muestra "saldo insuficiente" y le dice cuanto falta (totalPedido - saldo). Se devuelve al paso 10 para que meta mas dinero
    * Si el saldo alcanza, continua al paso 13
13. Se revisa el inventario: que haya suficiente cafe, te, leche y agua (la de la receta + la extra del tamano) y minimo 1 vaso del tamano elegido
    * Si falta algun ingrediente o no hay vasos, la maquina muestra "producto agotado", devuelve el saldo y vuelve al paso 5
    * Si hay todo, continua al paso 14
14. Se calcula el cambio: cambio = saldo - totalPedido
15. Si el cambio es mayor a 0, se revisa si hay monedas y billetes para darlo
    * Si no hay con que darlo, la maquina muestra "no hay cambio, ingrese el valor exacto", devuelve el saldo y vuelve al paso 5
    * Si se puede dar, continua al paso 16
16. La maquina resta del inventario los ingredientes de la receta (sumando el agua extra del tamano) y 1 al vaso del tamano elegido
17. Si el usuario pidio azucar, se restan 5 g de azucar del inventario
18. La maquina sirve el producto (cafe o te)
19. La maquina entrega el cambio y resta las monedas y billetes usados del inventario de dinero
20. La maquina muestra "Finalizado"
21. El saldo vuelve a 0
22. La maquina queda lista para otro usuario (vuelve al paso 5)

