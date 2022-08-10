'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array
  }

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }

  return [].concat(quickSort(left).concat(equal).concat(quickSort(right)))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) {
    return array;
  }

  let half = Math.floor(array.length / 2);
  let left = array.slice(0, half);
  let right = array.slice(half);

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let mergeArray = [];
  let arrayOne = 0;
  let arrayTwo = 0;

  while (arrayOne < left.length && arrayTwo < right.length) {
    if (left[arrayOne] < right[arrayTwo]) {
      mergeArray.push(left[arrayOne]);
      arrayOne++;
    } else {
      mergeArray.push(right[arrayTwo]);
      arrayTwo++;
    }
  }

  return mergeArray.concat(left.slice(arrayOne)).concat(right.slice(arrayTwo))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
