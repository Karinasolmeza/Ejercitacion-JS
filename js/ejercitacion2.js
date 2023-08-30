function obtenerMayor(x, y) {
  return Math.max(x, y);
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  /* Metodos de MAth */
}
console.log(obtenerMayor(4, 4));

function mayoriaDeEdad() {
  //Determinar si la persona según su edad puede ingresar a un evento.
  let edad = parseInt(prompt("Ingrese su edad"));
  switch (true) {
    case edad >= 18:
      alert("Allowed"); //Si tiene 18 años ó más, devolver --> "Allowed"
      break;
    case edad < 18:
      alert("Not Alloed"); //Si es menor, devolver --> "Not allowed"
    default:
      alert("Edad No Válida");
      break;
  }
}
//mayoriaDeEdad();

function conection() {
  let status = parseInt(prompt("Ingrese un status")); //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  switch (true) {
    case status === 1:
      alert("Online"); //Cuando el estado es igual a 1, el usuario está "Online"
      break;
    case status === 2:
      alert("Away"); //Cuando el estado es igual a 2, el usuario está "Away"
      break;
    default:
      alert("Offline"); //De lo contrario, presumimos que el usuario está "Offline"
      break;
  }
}
//conection();//Devolver el estado de conexión de usuario en cada uno de los casos.

function saludo() {
  // Devuelve un saludo en tres diferentes lenguajes:
  let idioma = prompt("Ingrese en que idioma quiere ser saludado");
  idioma = idioma.toLocaleLowerCase();
  switch (idioma) {
    case "aleman":
      alert("Guten Tag!"); // Si "idioma" es "aleman", devuelve "Guten Tag!"
      break;
    case "mandarin":
      alert("Ni Hao!"); // Si "idioma" es "mandarin", devuelve "Ni Hao!"
      break;
    case "ingles":
      alert("Hello!"); // Si "idioma" es "ingles", devuelve "Hello!"
      break;
    default:
      alert("Hola!"); // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
      break;
  }
}
//saludo();

function colors() {
  //La función recibe un color. Devolver el string correspondiente: //Usar el statement Switch.
  let color = prompt("Ingrese un color en ingles"); //La función recibe un color. Devolver el string correspondiente:
  color = color.toLocaleLowerCase();
  switch (color) {
    case "blue":
      alert("This is blue"); //En caso que el color recibido sea "blue", devuelve --> "This is blue"
      break;
    case "red":
      alert("This is red"); //En caso que el color recibido sea "red", devuelve --> "This is red"
      break;
    case "green":
      alert("This is green"); //En caso que el color recibido sea "green", devuelve --> "This is green"
      break;
    case "orange":
      alert("This is orange"); //En caso que el color recibido sea "orange", devuelve --> "This is orange"
      break;
    default:
      alert("Color not found"); //Caso default: devuelve --> "Color not found"
      break;
  }
}
//colors();
function esDiezOCinco(numero) {
  if (numero == 10 || numero == 5) {
    return true;
  } // Devuelve "true" si "numero" es 10 o 5
  else {
    false;
  } // De lo contrario, devuelve "false"
  // Tu código:
}
//console.log(esDiezOCinco(10));
const esDiezOCincoTernario = (numero) => {
  return numero == 10 || numero == 5 ? true : false;
};
//console.log(esDiezOCincoTernario(15));

function estaEnRango(numero) {
  if (numero < 50 && numero > 20) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    return true;
  } else {
    return false; // De lo contrario, devuelve "false"
  }
}
//console.log(estaEnRango(36));
const estaEnRangoternario = (numero) => { return numero < 50 && numero > 20 ? true : false }
//console.log(estaEnRangoternario(36));

function esEntero(numero) {
  if (numero === Math.floor(numero)) {
    return true;
  } // Devuelve "true" si "numero" es un entero (int/integer)  // Pista: Puedes resolver esto usando `Math.floor`
  else {
    return false;
  }
}// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
//console.log(esEntero(0.8));
const esEnteroTernario = (numero) => { return numero === Math.floor(numero) ? true : false }
//console.log(esEnteroTernario(1));

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz" // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  }
  else if (numero % 3 === 0) {
    return "fizz"// Si "numero" es divisible entre 3, devuelve "fizz"
  }
  else if (numero % 5 === 0) {
    return "buzz"// Si "numero" es divisible entre 5, devuelve "buzz"
  }
  else {
    return numero;
  }
  // De lo contrario, devuelve el numero
}
//console.log(fizzBuzz(7));
const fizzBuzzTernario = (numero) => { return numero % 3 === 0 && numero % 5 === 0 ? "fizzbuzz" : numero % 3 === 0 ? "fizz" : numero % 5 === 0 ? "buzz" : numero }
//console.log(fizzBuzzTernario(7));

function operadoresLogicos(num1, num2, num3) { //La función recibe tres números distintos.
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  }
  else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  }
  else if (num3 > num1 && num3 > num2) {
    num3++
    return num3;  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  }
  else if (num1 == 0 || num2 == 0 || num3 == 0) {
    return "Error"   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  }
  else {
    return false; //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  }
}
console.log(operadoresLogicos(-9, -8, 10));


// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primo
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(esPrimo(2));   // Esto imprimirá "true" porque 2 es primo
console.log(esPrimo(11));  // Esto imprimirá "true" porque 11 es primo
console.log(esPrimo(15));  // Esto imprimirá "false" porque 15 no es primo
console.log(esPrimo(1));   // Esto imprimirá "false" porque 1 no es primo
console.log(esPrimo(0));   // Esto imprimirá "false" porque 0 no es primo

function esPrimo2(numero){
if (numero <= 1) {
  return false;
}
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    return false;
  }
}
return true;
}
console.log(esPrimo(7))

//Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//si su valor es true y “Soy falso” si su valor es false.
//Escribe tu código aquí
function esVerdadero(valor) {
  if (valor === true) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}
console.log(esVerdadero(true));  // Esto imprimirá "Soy verdadero"
console.log(esVerdadero(false)); // Esto imprimirá "Soy falso"

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//Escribe tu código aquí
function tablaDelSeis() {
  let tabla = [];
  for (let i = 0; i <= 10; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}
console.log(tablaDelSeis());

//Leer un número entero y determinar si tiene 3 dígitos.
//Escribe tu código aquí
function tieneTresDigitos(numero) {
  if (numero >= 100 && numero <= 999) {
    return true;
  } else {
    return false;
  }
}
console.log(tieneTresDigitos(123)); //true, porque 123 tiene tres dígitos.
console.log(tieneTresDigitos(42));  //false, porque 42 no tiene tres dígitos.
console.log(tieneTresDigitos(1000)); //false, porque 1000 no tiene tres dígitos.

//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.
//Usar el bucle do ... while.
function doWhile(numero) {
  let contador = 0; // Inicializamos un contador para controlar las iteraciones
  do {
    numero += 5; // Aumentamos el valor en 5 en cada iteración
    contador++; // Incrementamos el contador de iteraciones
  } while (contador < 8); // Repetir hasta que hayamos realizado 8 iteraciones
  return numero; // Devolver el valor final después de las 8 iteraciones
}
console.log(doWhile(10)); //valor final después de aumentar en 5, 8 veces.


