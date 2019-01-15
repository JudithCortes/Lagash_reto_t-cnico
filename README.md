# Lagash_reto_técnico

Se creó una aplicación web con Javascript, que permite seleccionar lugares para la entrada a un cine.
Consiste en una sola pantalla con 2 secciones: “mapa del cine“ y “resumen del pedido”.

## Mapa del cine

Son 4 círculos con los números del 1 al 4 que representan lugares del cine. Los asientos pueden tener 3 estados diferentes, “ocupado” (circulo gris
obscuro), “disponible” (gris claro), “seleccionado” (azul).
- Hacer que el asiento #2 este “ocupado” siempre.
- El usuario no puede seleccionar un lugar con estatus de “ocupado”.
- Si el usuario da clic a un lugar “disponible”, este pasara a tener estatus de “seleccionado”.
- Si el usuario da clic a un lugar “seleccionado”, este pasara a tener estatus de “disponible”.

## Resumen de compra

El resumen consiste en el monto, y un botón para pagar:

- El total se debe ir actualizando dependiendo del número de asientos seleccionados. Cada asiento tiene un costo de $200. 
- Si el usuario elige 3 o más asientos, obtiene un 50% de descuento sobre total.
- Al presionar el botón “Pagar ahora”, redireccionar a una pagina que contenga el texto “Gracias por tu compra”.

