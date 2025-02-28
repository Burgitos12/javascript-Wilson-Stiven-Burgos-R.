/*
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
/*
let precio = 2.14;
let cantidad = 20;

console.log("Tipo de dato de precio:", typeof precio); // 'number'
console.log("Tipo de dato de cantidad:", typeof cantidad); // 'number'
document.write("Tipo de dato de cantidad: " + typeof cantidad + "<br>"); // Muestra en el navegador
alert("Tipo de dato de cantidad: " + typeof cantidad); // Muestra en una alerta

// 1. Descuento del 25%
function calcularDescuento(precio) {
    return precio * 0.75; // Aplicar el 25% de descuento
}

// 2. Inversión con interés del 2%
function calcularGanancia(capital) {
    return capital * 0.02; // Calcular el 2% de ganancia
}

// 3. Calificación final
function calcularCalificacion(parcial1, parcial2, parcial3, examenFinal, trabajoFinal) {
    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    return (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
}

// 4. Precio de venta con ganancia del 30%
function calcularPrecioVenta(precioCompra) {
    return precioCompra * 1.30; // Aumentar el 30% al precio de compra
}

// 5. Monto a pagar en taxi
function calcularMontoTaxi(kilometros, minutos) {
    return (kilometros * 15000) + (minutos * 2000); // Calcular el costo total
}

// 6. Cuadrado de tres números
function calcularCuadrados(num1, num2, num3) {
    return [num1 ** 2, num2 ** 2, num3 ** 2]; // Devolver los cuadrados de los números
}

// 7. Distribución del presupuesto
function distribuirPresupuesto(presupuesto) {
    const ginecologia = presupuesto * 0.40;
    const traumatologia = presupuesto * 0.30;
    const pediatria = presupuesto * 0.30;
    return { ginecologia, traumatologia, pediatria };
}

// 9. Porcentaje de inversión
function calcularPorcentajeInversion(inversion1, inversion2, inversion3) {
    const total = inversion1 + inversion2 + inversion3;
    const porcentaje1 = (inversion1 / total) * 100;
    const porcentaje2 = (inversion2 / total) * 100;
    const porcentaje3 = (inversion3 / total) * 100;
    return { porcentaje1, porcentaje2, porcentaje3 };
}

// 10. Calculadora básica
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operación no válida";
    }
}

// Ejemplos de uso en la consola
console.log("1. Precio final con descuento:", calcularDescuento(100000)); // 75000
console.log("2. Ganancia después de un mes:", calcularGanancia(5000000)); // 100000
console.log("3. Calificación final:", calcularCalificacion(4.0, 3.5, 4.5, 4.0, 5.0)); // 4.225
console.log("4. Precio de venta con ganancia:", calcularPrecioVenta(200000)); // 260000
console.log("5. Monto a pagar en taxi:", calcularMontoTaxi(10, 30)); // 210000
console.log("6. Cuadrados de los números:", calcularCuadrados(2, 3, 4)); // [4, 9, 16]

const presupuesto = distribuirPresupuesto(1000000000);
console.log("7. Distribución del presupuesto:");
console.log("Ginecología:", presupuesto.ginecologia); // 400000000
console.log("Traumatología:", presupuesto.traumatologia); // 300000000
console.log("Pediatría:", presupuesto.pediatria); // 300000000

const porcentajes = calcularPorcentajeInversion(500000, 300000, 200000);
console.log("9. Porcentaje de inversión:");
console.log("Inversión 1:", porcentajes.porcentaje1); // 50
console.log("Inversión 2:", porcentajes.porcentaje2); // 30
console.log("Inversión 3:", porcentajes.porcentaje3); // 20

console.log("10. Resultado de la operación (10 + 5):", calculadora(10, 5, "+")); // 15

//ESTRUCTURAS DE CONTROL
//EJEMPLO 1 - DECLARAR DOS VARIABLES UNA QUE SEA EL NOMNRE Y OTRA LA EDAD, Y MORSTRAR SI ES MAYOR DE EDAD O NO.

let nombre1 = prompt ("Ingrese su nombre");
let edad1 = parseInt(prompt("Ingrese su edad"));

if (edad1 >18) {
    alert("hola" + nombre1 + " Eres mayor de edad")
}

// El usuario digite nombre y edad con la siguiente verificación
/* 
1 a 18 años es joven
19 a 40 años es adulto
41 a 50 años es maduro
51 en adelante es anciano
*/
/*
let nombre2 = prompt("Ingrese su nombre");
let edad2 = parseInt(prompt("Ingrese su edad"));

if (edad2 >= 1 && edad2 <= 18) {
  alert("Hola " + nombre2 + ", eres una persona joven");
} else if (edad2 >= 19 && edad2 <= 40) {
  alert("Hola " + nombre2 + ", eres una persona adulta");
} else if (edad2 >= 41 && edad2 <= 50) {
  alert("Hola " + nombre2 + ", eres una persona madura");
} else if (edad2 >= 51) {
  alert("Hola " + nombre2 + ", eres una persona anciana");
} else {
  alert("Por favor ingrese una edad válida");
}
*/
//DECLARAR UNA VARIABLE NUMERICA QUE MUESTRE LA CUENTA REGRESIVA A LLEGAR A 0
/*
let cuentaAtras = 10

while (cuentaAtras > 0){
    alert(cuentaAtras)

    cuentaAtras = cuentaAtras -  1
}*/

/*
//5 EDADES DE DIFERENTE PERSONAS Y DETERMINAR SI ES MAYOR DE EDAD
let N_personas = 0;

do {
    let nombre2 = prompt("Ingrese su nombre");
    let edad2 = parseInt(prompt("Ingrese su edad"));

    if (edad2 >= 18) {
        alert(nombre2 + ", es mayor de edad");
    } else {
        alert(nombre2 + " es menor de edad");
    }

    N_personas++; 
} while (N_personas < 5);  
 */

//FOR
/*Imprimir las tablas de multiplicar del numero que el usuario ingrese
Hasta el numero 10, mostrar en pantalla la siguiente sintaxis*/
/*
let numero = parseInt(prompt("Ingresa un número:"));
let limite = parseInt(prompt("Ingresa el límite:"));

let tabla = "Tabla de multiplicar del " + numero + ":\n";
for (let i = 1; i <= limite; i++) {
    tabla += numero + " * " + i + " = " + (numero * i) + "\n";
}

alert(tabla);*/

//1. Imprime por consola un mensaje si el usuario y contraseña
//  concide con unos establecidos

/*let usuario = prompt("Ingrese su usuario");
let contraseña = parseInt(prompt("Ingrese contraseña")); 

let contraseñaCorrecta = 1234; 

switch (contraseña === contraseñaCorrecta) {
    case true:
        alert("Bienvenido " + usuario);
        break;
    default:
        alert("Contraseña incorrecta");
}*/

//2. verifica si un numero es positivo 0
//  negativo o cero, e imprime un mensaje


/*let num = parseInt(prompt("Ingrese un número:"));

switch (true) {
    case num > 0:
        alert("Positivo");
        break;
    case num < 0:
        alert("Negativo");
        break;
    case num === 0:
        alert("Cero");
        break;
    default:
        alert("Número invalido");
}*/




//3. verifica si una persona puede votar o no,
//  (mayor o igual a 18) e indica cuantos años le faltan

/*let edad = parseInt(prompt("edad:"));
let objetivo = 18;
let añosFaltantes = objetivo - edad;

switch (true) {
    case edad >= 18:
1
    alert("eres mayor de edad");
        break;
    default:
        alert("te faltan " + añosFaltantes + (" años para ser mayor de edad"));
}*/

//4. usa el operador ternario para asignar el valor,
//  "adulto" o "menor" a una variable dependiendo de la edad





/*function verificarEdad(edad) {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
}


console.log(verificarEdad(18));
console.log(verificarEdad(20));
console.log(verificarEdad(17));
console.log(verificarEdad(10));*/




//dias de la semamna

 /* let dia = new Date().getDay();

switch (dia) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    default:
        console.log("Hoy es fin de semana");
}*/


/*
comprobar edades

1 a 18 años es joven
19 a 40 años es adulto
41 a 50 años es maduro
51 en adelante es anciano

let edad = parseInt(prompt("Ingrese su edad"));

switch(edad) {

    case(edad >= 1 && edad2 <= 18):
    alert("eres una persona joven");
    break;

    case(edad >= 19 && edad2 <= 40):
    alert("eres una persona joven");
    break;

    case(edad >= 41 && edad2 <= 50):
    alert("eres una persona joven");
    break;

    default:
        alert(" eres una persona anciana");
}*/



/*Ejercicio 1. 
Dada las 3 calificaciones que el estudiante obtuvo en un curso
a) Determinar su promedio
b) Indicar si el estudiante aprobó o no aprobó el curso.
Las notas deben ser de 1 a 10 y aprueba con un promedio mayor de 6*/

// Función para calcular el promedio y determinar si aprueba
/*function calcularPromedio(nota1, nota2, nota3) {
    // Verificar que las notas estén en el rango válido (1 a 10)
    if (nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10) {
        alert("Las notas deben estar en el rango de 1 a 10.");
        return;
    }

    // Calcular el promedio y redondearlo a un número entero
    const promedio = Math.round((nota1 + nota2 + nota3) / 3);

    // Determinar si aprueba o no
    if (promedio > 6) {
        alert(`Promedio: ${promedio} - Aprueba.`);
    } else {
        alert(`Promedio: ${promedio} - No aprueba.`);
    }
}

// Ejemplo de uso
const nota1 = 7;
const nota2 = 8;
const nota3 = 5;

calcularPromedio(nota1, nota2, nota3); // Muestra una ventana emergente con el resultado*/

/* Ejercicio 2 
Leer dos números y los imprima en forma ascendente.*/

// Solicitar los dos números al usuario
/*const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar si los valores ingresados son números válidos
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingrese números válidos.");
} else {
    // Determinar el orden ascendente
    if (numero1 < numero2) {
        alert(`Números en orden ascendente: ${numero1}, ${numero2}`);
    } else if (numero1 > numero2) {
        alert(`Números en orden ascendente: ${numero2}, ${numero1}`);
    } else {
        alert(`Los números son iguales: ${numero1}`);
    }
}*/

/*Ejercicio 3
Dado un numero entre 1 y 7 escriba su correspondiente día de la semana
así:
DIA1 = LUNES
DIA2 = MARTES
DIA3 = MIECOLES
DIA4 = JUEVES
DIA5 = VIERNES
DIA6 = SABADO
DIA7 = DOMINGO3*/

// Solicitar al usuario que ingrese un número entre 1 y 7
/*const numero = parseInt(prompt("Ingrese un número entre 1 y 7:"));

// Verificar si el número está en el rango válido
if (isNaN(numero) || numero < 1 || numero > 7) {
    alert("Por favor, ingrese un número válido entre 1 y 7.");
} else {
    let dia;

    // Determinar el día de la semana usando switch
    switch (numero) {
        case 1:
            dia = "LUNES";
            break;
        case 2:
            dia = "MARTES";
            break;
        case 3:
            dia = "MIÉRCOLES";
            break;
        case 4:
            dia = "JUEVES";
            break;
        case 5:
            dia = "VIERNES";
            break;
        case 6:
            dia = "SÁBADO";
            break;
        case 7:
            dia = "DOMINGO";
            break;
    }

    // Mostrar el resultado en una ventana emergente
    alert(`DIA${numero} = ${dia}`);
}*/

/*Ejercicio 4
Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
manera:
a) Si trabaja 40 horas o menos se le paga $16000 por hora
b) Si trabaja más de 40 horas se le paga $20000 por hora*/

// Solicitar al usuario la cantidad de horas trabajadas
const horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));

// Verificar si la entrada es válida
if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
    alert("Por favor, ingrese un número válido de horas.");
} else {
    let salario;

    // Calcular el salario según las horas trabajadas
    if (horasTrabajadas <= 40) {
        salario = horasTrabajadas * 16000; // $16,000 por hora
    } else {
        salario = 40 * 16000 + (horasTrabajadas - 40) * 20000; // $16,000 por las primeras 40 horas y $20,000 por las horas extras
    }

    // Mostrar el salario en una ventana emergente
    alert(`Su salario semanal es: $${salario.toLocaleString()}`);
}