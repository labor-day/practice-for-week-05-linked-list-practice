class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let newHead = new LinkedListNode(val);

    if (this.head === null) {
      newHead.next = null;
    } else {
      newHead.next = this.head;
    }

    this.head = newHead;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newTail = new LinkedListNode(val);
    if (this.head === null) {
      this.head = newTail;
    } else {

      let node = this.head;
      while(node.next !== null) {
        node = node.next
      }
      node.next = newTail;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
