const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let singleListHead = new LinkedList();

let singleStartHead = new Date();
for (let i = 1; i < 1000000; i++) {
  singleListHead.addToHead(i);
}
let singleEndHead = new Date();

let singleListTail = new LinkedList();

let singleStartTail = new Date();
for (let i = 1; i < 100000; i++) {
  singleListTail.addToTail(i);
}
let singleEndTail = new Date();


console.log("million single head", singleEndHead-singleStartHead);
console.log("100k single tail", singleEndTail-singleStartTail);

let doubleListHead = new DoublyLinkedList();

let doubleStartHead = new Date();
for (let i = 1; i < 1000000; i++) {
  doubleListHead.addToHead(i);
}
let doubleEndHead = new Date();

let doubleListTail = new DoublyLinkedList();

let doubleStartTail = new Date();
for (let i = 1; i < 1000000; i++) {
  doubleListTail.addToTail(i);
}
let doubleEndTail = new Date();


console.log("million double head", doubleEndHead-doubleStartHead);
console.log("million double tail", doubleEndTail-doubleStartTail);
