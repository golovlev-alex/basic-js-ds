const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class NodeTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null; // начальное значение root устанавливаем на null
  }
 root() {
   return this.root;
  }

  add(data) {
    if (!this.root) {
      this.root = new NodeTree(data)
    } else {
      let node = this.root;
      let newNode = new NodeTree(data)
      while (node) {
        if (data > node.data) {
          if (!node.right) {
          break
          }
          node = node.right
        } else {
          if (!node.left) {
            break
          }
          node = node.left
        }
      }
      if (data > node.data) {
        node.right = newNode
      } else {
        node.left = newNode
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, node = this.root) {
      if (node === null) {
        return null; // Узел не найден
      }
  
      if (data === node.data) {
        return node; // Узел с заданным значением найден
      }
  
      if (data < node.data) {
        return this.find(data, node.left); // Рекурсивно ищем в левом поддереве
      } else {
        return this.find(data, node.right); // Рекурсивно ищем в правом поддереве
      }
    }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, data) {
    if (node === null) {
      return null; // Узел не найден, возвращаем null
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data); // Рекурсивно удаляем из левого поддерева
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data); // Рекурсивно удаляем из правого поддерева
    } else {
      // Нашли узел с заданным значением

      // Узел без детей (листовой узел)
      if (node.left === null && node.right === null) {
        node = null; // Просто удаляем узел
      }

      // Узел с одним ребенком
      else if (node.left === null) {
        node = node.right; // Заменяем узел на его правого ребенка
      } else if (node.right === null) {
        node = node.left; // Заменяем узел на его левого ребенка
      }

      // Узел с двумя детьми
      else {
        const minRight = this.findMinNode(node.right); // Находим минимальный узел в правом поддереве
        node.data = minRight.data; // Копируем значение минимального узла в текущий узел
        node.right = this.removeNode(node.right, minRight.data); // Рекурсивно удаляем минимальный узел
      }
    }

    return node;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node; // Нашли самый левый узел, это минимальное значение
    }
    return this.findMinNode(node.left); // Рекурсивно ищем в левом поддереве
  }


  min() {
    if (this.root === null) {
      return null; // Дерево пустое, возвращаем null
    }

    let node = this.root;
    while (node.left !== null) {
      node = node.left; // Идем влево до самого левого узла
    }

    return node.data; // Возвращаем значение самого левого узла (минимальное значение)

  }

  max() {
    if (this.root === null) {
      return null; // Дерево пустое, возвращаем null
    }

    let node = this.root;
    while (node.right !== null) {
      node = node.right; // Идем вправо до самого правого узла
    }

    return node.data; // Возвращаем значение самого правого узла (максимальное значение)

  }

}
module.exports = {
  BinarySearchTree
};