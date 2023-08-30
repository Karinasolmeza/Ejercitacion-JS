/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

//modo Correcto ForEach (pueod usar tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

/* b)Eduardo es descalificado y se elimina del concurso */

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

var clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];
function mostrarClasificacion(nombre, i) {
    console.log("Clasificación " + (i + 1) + ": " + nombre);
  }
  
  clasificaciones.forEach(mostrarClasificacion);

  // Paso 1: Modificar las posiciones en el array

// a) Leon adelanta a Agostina
var indiceAgostina = clasificaciones.indexOf("Agostina");
var indiceLeon = clasificaciones.indexOf("Leon");
clasificaciones.splice(indiceAgostina, 1); // Eliminar a Agostina del array
clasificaciones.splice(indiceLeon, 0, "Agostina"); // Agregar a Agostina en la nueva posición

// b) Eduardo es descalificado y se elimina del concurso
var indiceEduardo = clasificaciones.indexOf("Eduardo");
clasificaciones.splice(indiceEduardo, 1); // Eliminar a Eduardo del array

// c) Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden
var indiceMarcos = clasificaciones.indexOf("Marcos");
var indiceFranco = clasificaciones.indexOf("Franco");
clasificaciones.splice(indiceFranco, 0, "Martina", "Julieta"); // Agregar a Martina y Julieta en la nueva posición

// d) Hay una nueva participante que pasa a encabezar la clasificación: Alicia
clasificaciones.unshift("Alicia"); // Agregar a Alicia al principio del array

// Paso 2: Mostrar la clasificación actualizada
function mostrarClasificacion(nombre, indice) {
  console.log("Clasificación " + (indice + 1) + ": " + nombre);
}
clasificaciones.forEach(mostrarClasificacion);
