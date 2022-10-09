// 카드2
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size++;

    return newNode;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }
}

function solution(num) {
  const cards = new LinkedList();

  for (let i = 1; i <= num; i++) {
    cards.push(i)
  }

  while (cards.size !== 1) {
    cards.shift();
    cards.push(cards.head.value)
    cards.shift();
  }

  console.log(cards.head);

  return cards.head.value
}

console.log(solution(+input));