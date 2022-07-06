class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let newHead = new DoublyLinkedListNode(val);

    if (this.head === null) {
      this.tail = newHead;
      newHead.next = null;
      this.head = newHead;
    }

    if(this.head) {
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }

    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newTail = new DoublyLinkedListNode(val);
    if (this.head === null) {
      this.head = newTail;
      newTail.next = null;
      this.tail = newTail;
    }

    newTail.prev = this.tail;
    newTail.next = null;
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
