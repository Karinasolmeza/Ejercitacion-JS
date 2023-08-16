// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "nombre";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 13;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {
  console.log(str);
}
devolverString("Cadena de texto");

const devolverStringFlecha= str => str; console.log(devolverStringFlecha("FUNCION FLECHA"));

function suma(x, y) {
  // Realiza la suma de "x" e "y" y devuelve el resultado
  return x + y;
}
// Llamamos a la función "suma" con los números 1 y 1, y mostramos el resultado en la consola
console.log(suma(1, 1)); // Debería imprimir 2 en la consola

const sumaFlecha=(x, y)=>{return x+y}; console.log(sumaFlecha(4,2)+" "+"sumaFlecha");

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  return x - y;
}
// Tu código:
console.log(resta(2, 1)); //Debería imprimir 1

const restaFlecha=(x,y)=>{return x-y};console.log(restaFlecha(3,3)+" "+"restaFlecha");

function multiplica(x, y) {
  return x * y; // Multiplica "x" por "y" y devuelve el valor
}
console.log(multiplica(2, 2));

const multiplicaFlecha=(x,y)=>{return x*y}; console.log(multiplicaFlecha(3,3) +" "+"multiplcarflecha");

function divide(x, y) {
  return x / y; // Divide "x" entre "y" y devuelve el valor
}
console.log(divide(4, 2));

const divideFlecha=(x,y)=>{return x/y}; console.log(divideFlecha(9,3)+" "+"divideFlecha");

function sonIguales(x, y) {
  if (x === y) {
    return true; // Devuelve "true" si "x" e "y" son iguales
  } else {
    return false;
  }
}
console.log(sonIguales(5, 5));

const sonIgualesTernario=(x,y)=>{return x===y?true:false}; console.log(sonIguales(4,4)+" "+"sonIgualesTernario");

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true; // Devuelve "true" si las dos strings tienen la misma longitud
  } else {
    return false; // De lo contrario, devuelve "false"
  }
}
console.log(tienenMismaLongitud("karina", "soledad"));

const tienenMismaLongitudTernario=(str1, str2)=>{return str1.length===str2.length?true:false}; console.log(tienenMismaLongitudTernario("karina", "karinas")+" "+"tienenMismaLongitudTernario");

function menosQueNoventa(num) {
  if (num < 90) {
    return true; // Devuelve "true" si el argumento de la función "num" es menor que noventa
  } else {
    return false; // De lo contrario, devuelve "false"
  }
}
console.log(menosQueNoventa(140));

const menosQueNoventaTernario=num=>num<90?true:false;console.log(menosQueNoventaTernario(50)+" "+"menosQueNoventaTernario"); 

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  } // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  else {
    return false;
  } // De lo contrario, devuelve "false"
}
console.log(mayorQueCincuenta(10));

const mayorQueCincuentaTernario=num=>num>50?true:false;console.log(menosQueNoventaTernario(94)+" "+"menosQueCincvuentaTernario");

function obtenerResto(x, y) {
  return x % y; // Obten el resto de la división de "x" entre "y"
}
console.log(obtenerResto(26, 3));
const obtenerRestoTernario=(x,y)=>{return x % y};console.log(obtenerRestoTernario(41,2)+" "+ "obtenerRestoTernario");

function esPar(num) {
  if (num % 2 == 0) {
    return true;
  } // Devuelve "true" si "num" es par
  else {
    return false; // De lo contrario, devuelve "false"
  }
}
console.log(esPar(3));

const esParTernario=(num)=>{return num % 2 == 0?true:false}; console.log(esParTernario(3)+" "+ "esParTernario");

function esImpar(num) {
  if (num % 2 !== 0) {
    return true;
  } // Devuelve "true" si "num" es impar
  else {
    return false;
  } // De lo contrario, devuelve "false"
}
console.log(esImpar(2));

const esImparTernario=(num)=>{return num % 2 !== 0?true:false}; console.log(esImparTernario(7)+" " + "esImparTernario");

function elevarAlCuadrado(num) {
  return num ** 2; // Devuelve el valor de "num" elevado al cuadrado
}
console.log(elevarAlCuadrado(2));
const elevarAlCuadradoTernario = num => num ** 2; console.log(elevarAlCuadradoTernario(4)+" "+"elevarAlCuadradoTernario");

function elevarAlCubo(num) {
  return num ** 3; // Devuelve el valor de "num" elevado al cubo
}
console.log(elevarAlCubo(2));
const elevarAlCuboTernario=num=>num**3; console.log(elevarAlCuboTernario(4)+" "+"elevarAlCuboTernario");

function elevar(num, exponent) {
  return num ** exponent; // Devuelve el valor de "num" elevado al exponente dado en "exponent"
}
console.log(elevar(3, 2)+ " "+"elevar");
const elevarTernario=(num, exponent)=>num*exponent;console.log(elevarTernario(5,6)+" "+ "elevarTernario");

function redondearNumero(num) {
  return Math.round(num); // Redondea "num" al entero más próximo y devuélvelo
}
console.log(redondearNumero(3.2));
const redondearNumeroTernario=num=>Math.round(num); console.log(redondearNumeroTernario(4.6)+""+"redondearNumeroTernario");

function redondearHaciaArriba(num) {
  return Math.ceil(num); // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
}
console.log(redondearHaciaArriba(3.2));

const redondearHaciaArribaTernario=num=>Math.ceil(num);console.log(redondearHaciaArribaTernario(4.6)+" "+"redondearHaciaArribaTernario");

function numeroRandom() {
  return Math.random(); //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}
console.log(numeroRandom());

const numeroRandomTernario=()=> Math.random();console.log(numeroRandomTernario()+" "+"numeroRandomTernario");

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  if (numero > 0) {
    console.log("El número es positivo."); //Si el número es positivo, devolver ---> "Es positivo"
  } else if (numero < 0) {
    console.log("El número es negativo."); //Si el número es negativo, devolver ---> "Es negativo"
  } else {
    return false; //Si el número es 0, devuelve false
  }
}
console.log(esPositivo(2));

const esPositivoTernario=(num)=>{return (num >0? "El número es positivo Ternario.": (num < 0)? "El número es negativo Ternario.":false)}
console.log(esPositivoTernario(-2));

function agregarSimboloExclamacion(str) {
  return str + "!"; // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
}
console.log(agregarSimboloExclamacion("hello world")); // Ejemplo: "hello world" pasaría a ser "hello world!"

const agregarSimboloExclamacionTernario=str=>`${str} !`; console.log(agregarSimboloExclamacionTernario("holis word")); 

function combinarNombres(nombre, apellido) {
  return nombre + " " + apellido; // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
}
console.log(combinarNombres("karina", "soledad")); // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"

const combinarNombresTernario=(nombre, apellido)=>`${nombre} ${apellido}`; console.log(combinarNombresTernario("soledad","meza"));

function obtenerSaludo(nombre) {
  return "Hola" + " " + nombre + "!"; // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
}
console.log(obtenerSaludo("karina"));

const obtenerSaludoTernario=nombre=>`Hola ${nombre} !`; console.log(obtenerSaludoTernario("Kari"));

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho; // Retornar el area de un cuadrado teniendo su altura y ancho Área = Lado * Lado
}
console.log(obtenerAreaRectangulo(2, 5));

const obtenerAreaRectanguloTernario=(alto, ancho)=>alto * ancho; console.log(obtenerAreaRectanguloTernario(3,5)+" "+ "obtenerAreaRectanguloTernario");

function retornarPerimetro(lado) {
  return lado * 4; //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
}
console.log(retornarPerimetro(3));

const retornarPerimetroTernario=(lado)=>lado*4; console.log(retornarPerimetroTernario(5)+" "+ "retornarPerimetroTernario");

function areaDelTriangulo(base, altura) {
  return (base * altura) / 2; //Desarrolle una función que calcule el área de un triángulo.
}
console.log(areaDelTriangulo(34, 23));

const areaDelTrianguloTernario=(base,altura)=>base * altura;console.log(areaDelTrianguloTernario(78,9)+" "+"areaDelTrianguloTernario");

let dolar = 1.2; //Supongamos que 1 euro equivale a 1.20 dólares.
function deEuroAdolar(euro) {
  return euro * dolar; //Escribe tu código aquí
}
let euro = Number(prompt("ingrese cantidad de euros a calcular en dolar")); //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
console.log(deEuroAdolar(euro));

function esVocal(letra) {
  if (letra.length !== 1) {
    return "Debe ingresar solo un caracter";
  } // Verificar si el usuario ingresó un string de más un carácter y, en ese caso, informarle

  letra = letra.toLowerCase(); // Convertir a minúsculas para manejar diferentes casos

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return "Es vocal";
  } // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  else {
    return "Dato incorrecto, ingrese una vocal";
  }
}

let letra;

do {
  letra = prompt("Ingrese una letra:");
  console.log(esVocal(letra));
} while (esVocal(letra) !== "Es vocal");

//Verificar si el usuario ingresó un string de más un carácter y, en ese caso, informarle
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//si ingresa una consonante muestre en pantalla dato incorrecto
