# Maquina-cafe

## **ENTRADAS**

#### *Productos/Inventario:*
- Saldo (variable, numero, $)
- Cafe (variable, numero, g)
- Leche (variable, numero, ml)
- Agua (variable, numero, ml)
- Vasos (variable, numero entero, unidades)
- Te (variable, numero, g)
- Azucar (variable, numero, g)

#### *Dinero/ Inventario:*
- Monedas 1000 500 200 (constante, numero, $)
- Billetes 2000 5000 10000 20000 (constante, numero, $)

#### *Entradas del usuario:*
- Dinero ingresado (entrada, numero, $) 
- Producto elegido (entrada, texto) 
- Con azucar (entrada, booleano)

#### *Unidades:*
- PESOS: $ 
- GRAMOS: g 
- MILILITROS: ml


#### *Recetas:*

- _Tinto ($1000):_ 
8 g cafe
120 ml agua

- _1 vaso Americano ($1500):_
10 g cafe
180 ml agua

- _1 vaso Cafe con leche ($2000):_
8 g cafe 
60 ml leche
90 ml agua

- _1 vaso Capuchino ($2500):_
9 g cafe
100 ml leche
60 ml agua

- _1 vaso Te ($1200):_
2 g te, 150 ml agua
1 vaso (si pide azucar se gastan 5 g mas)


## **SALIDAS** 

- Cafe o te 
- Cambio ($) 
- Mensajes (saldo insuficiente, producto agotado, no hay cambio)



## REGLAS DE NEGOCIO

- Solo sirve si el saldo alcanza para el precio
- Tiene que haber ingredientes y vaso suficientes
- Si sobra plata devuelve cambio, solo si tiene con que darlo
- Al servir descuenta los ingredientes del inventario


  
## PSEUDOCODIGO

1. Se declaran las variables del inventario (cafe, leche, agua, te, azucar, vasos) con sus cantidades iniciales
2. Se declaran las monedas y billetes que tiene la maquina para dar cambio
3. Se declaran las recetas con el precio y los ingredientes de cada producto
4. Se pone el saldo en 0
5. La maquina muestra los productos disponibles con su precio
6. El usuario mete dinero (moneda o billete) y la maquina lo lee como dineroIngresado
7. La maquina suma el dineroIngresado al saldo
8. El usuario elige el producto que quiere y la maquina lo lee como productoElegido
9. La maquina pregunta si lo quiere con azucar y lee la respuesta (si o no)
10. La maquina busca la receta del producto elegido para saber su precio y sus ingredientes
11. Se compara el saldo con el precio del producto
* Si el saldo es menor al precio, la maquina muestra "saldo insuficiente" y le dice cuanto falta. Se devuelve al paso 7 para que meta mas dinero
* Si el saldo alcanza, continua al paso 13
12. Se revisa el inventario: que haya suficiente cafe, te, leche y agua para la receta, y minimo 1 vaso
13. Si falta algun ingrediente o no hay vasos, la maquina muestra "producto agotado" y devuelve el saldo
14. Si hay todo, continua al paso 14
15. Se calcula el cambio: cambio = saldo - precio
* Si el cambio es mayor a 0, se revisa si hay monedas y billetes para darlo
* Si no hay con que darlo, la maquina muestra "no hay cambio, ingrese el valor exacto" y devuelve el saldo
* Si se puede dar, continua al paso 16
16. La maquina descuenta del inventario los ingredientes de la receta y 1 vaso
17. Si el usuario pidio azucar, se descuentan 5 g de azucar del inventario
18. La maquina sirve el producto (cafe o te)
19. La maquina entrega el cambio y descuenta las monedas y billetes usados del inventario de dinero
20. El saldo vuelve a 0
21. La maquina queda lista para otro usuario (vuelve al paso 6)
