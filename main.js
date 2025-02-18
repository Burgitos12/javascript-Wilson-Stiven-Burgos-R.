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
