// Ejercicio 1
let nombre = "Stiven Burgos";
let edad = 19; // La edad debería ser un número, no una cadena
let ciudad = "Garzón, Huila";
let rojo = "\x1b[31m"; // Código ANSI para color rojo en consola (solo en entornos compatibles)
let reset = "\x1b[0m"; // Restablecer color

console.log(rojo + "Mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + reset);

// Ejercicio 2
/* Crea una variable llamada precio y asígnale un valor decimal,
   luego crea otra variable llamada cantidad y asígnale un valor entero.
   Muestra el tipo de dato de cada variable en la consola. */

let precio = 2.14;
let cantidad = 20;

console.log("Tipo de dato de precio:", typeof precio); // 'number'
console.log("Tipo de dato de cantidad:", typeof cantidad); // 'number'
document.write("Tipo de dato de cantidad: " + typeof cantidad + "<br>"); // Muestra en el navegador
alert("Tipo de dato de cantidad: " + typeof cantidad); // Muestra en una alerta

//Ejercicio 3
/*Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/
let precioOriginal = 1380;

let descuento = 25;

let precioDescuento = precioOriginal - (precioOriginal * descuento / 100);

console.log("El precio con descuento es: " + precioDescuento);

/*Una tienda ofrece un 60% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/

let preciodeventa = 2090;

let descuento_2 = 60;

let preciodelDescuento = preciodeventa - (preciodeventa * 60 / 100);

console.log("El Descuento es de " + preciodelDescuento);

//Ejercicio 4
/*Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/
let capital = 1000;
let ganancia = capital * 0.02;
let total = capital + ganancia;

console.log(`Ganancia: $${ganancia}`);
console.log(`Total después de un mes: $${total}`);

/*Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 12%
mensual.*/

let Capital = 3550;
let ganacias = capital * 0.12;

let Total = ganacias + capital;

console.log(`ganacias: $${ganacias}`);
console.log(`Total despues de un mes: $${Total}`);