const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.head = null; // Голова очереди
    this.tail = null; // Хвост очереди
  }

  getUnderlyingList() {
    return this.head;
  }

  // Метод для добавления элемента в конец очереди
  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null; // Если очередь пуста, возвращаем null
    }

    const dequeuedValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null; // Если очередь стала пуста, сбрасываем и хвост
    }

    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
