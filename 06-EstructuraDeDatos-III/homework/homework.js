"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree() {
  class BinarySearchTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
    insert(value) {
      if (value > this.value) {
        if (this.right !== null) {
          this.right.insert(value);
        } else {
          this.right = new BinarySearchTree(value);
        }
      } else {
        if (this.left !== null) {
          this.left.insert(value);
        } else {
          this.left = new BinarySearchTree(value);
        }
      }
    }
    contains(value) {
      if (this.value === value) {
        return true;
      } else if (value > this.value) {
        return !!this.right && this.right.contains(value);
      } else {
        return !!this.left && this.left.contains(value);
      }
    }
    depthFirstForEach(cb, order) {
      if (order === "pre-order") {
        cb(this.value);
        this.left && this.left.depthFirstForEach(cb, order);
        this.right && this.right.depthFirstForEach(cb, order);
      } else if (order === "in-order") {
        this.left && this.left.depthFirstForEach(cb, order);
        cb(this.value);
        this.right && this.right.depthFirstForEach(cb, order);
      } else if (order === "post-order") {
        this.left && this.left.depthFirstForEach(cb, order);
        this.right && this.right.depthFirstForEach(cb, order);
        cb(this.value);
      } else {
        this.left && this.left.depthFirstForEach(cb, order);
        cb(this.value);
        this.right && this.right.depthFirstForEach(cb, order);
      }
    }
    breadthFirstForEach(cb, arr = []) {
      if (this.left) {
        arr.push(this.left);
      }
      if (this.right) {
        arr.push(this.right);
      }
  
      cb(this.value);
      arr.length && arr.shift().breadthFirstForEach(cb, arr);
    }
    size() {
      if (!this.left && !this.right) {
        return 1;
      } else if (!this.left) {
        return 1 + this.right.size();
      } else if (!this.right) {
        return 1 + this.left.size();
      } else {
        return 1 + this.left.size() + this.right.size();
      }
    }
  }
  
  
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
