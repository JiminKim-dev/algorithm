// 큐 2
// .shift() 사용시 시간초과

const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if(!this.head) return '-1';

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead.value;
  }

  size() {
    return this.length;
  }
  
  empty() {
    return !this.length ? '1' : '0'
  }

  front() {
    return !this.length ? '-1' : this.head.value;
  }

  back() {
    return !this.length ? '-1' : this.tail.value;
  }
}

function solution(arr) {
  const queue = new Queue();
  const result = [];
  
  arr.forEach(el => {
    const [command, num] = el.split(' ');
    command === 'push' ? queue[command](num) : result.push(queue[command]());
  })

  return result.join('\n')
}

console.log(solution(input));