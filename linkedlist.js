class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }
  appendNode(data) {
    let newNode = new listNode(data);
    if (list.head === null) {
      list.head = newNode;
    } else {
      let currentNode = list.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  prependNode(data) {
    let newNode = new listNode(data);
    if (list.head === null) {
      list.head = newNode;
    } else {
      newNode.next = list.head;
      list.head = newNode;
    }
  }
  displayNodes() {
    let currentNode = list.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  size() {
    let count = 0;
    let currentNode = list.head;
    while (currentNode != null) {
      count++;
      currentNode = currentNode.next;
    }
    console.log(count);
  }
  first() {
    let currentNode = list.head;
    console.log(currentNode.data);
  }
  last() {
    let currentNode = list.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    console.log(currentNode.data);
  }
  at(num) {
    let i = 0;
    let currentNode = list.head;
    while (i < num && currentNode.next != null) {
      currentNode = currentNode.next;
      i++;
    }
    if (i < num) {
      console.log("the list is not this long");
    } else {
      console.log(currentNode.data);
    }
  }
  pop() {
    if (list.head == null) {
      return list.head;
    }

    let currentNode = list.head;
    let previousNode = null;

    while (currentNode.next != null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
  }

  removePosition(position) {
    let current = list.head;
    let previous = null;
    let count = 0;

    while (current != null && count < position) {
      previous = current;
      current = current.next;
      count++;
    }
    if (current == null) {
      console.log("the linked list is not this long");
      return;
    }
    previous.next = current.next;
  }
  containsValue(num) {
    num = parseInt(num);
    let currentNode = list.head;
    while (currentNode != null) {
      if (currentNode.data == num) {
        console.log("true");
        return;
      }
      currentNode = currentNode.next;
    }
    console.log("false");
  }
  findValue(num) {
    let currentNode = list.head;
    let count = 0;
    while (currentNode != null) {
      if (currentNode.data == num) {
        console.log(count);
        return;
      } else {
        count++;
        currentNode = currentNode.next;
      }
    }
    console.log("value not found");
  }
  toString() {
    let currentNode = list.head;
    let stringList = "";
    while (currentNode != null) {
      stringList += `(${currentNode.data}) -> `;
      currentNode = currentNode.next;
    }
    console.log(`${stringList} (null)`);
  }
}

let list = new linkedList();

list.appendNode("dog");
list.appendNode("cat");
list.appendNode("rat");
list.displayNodes();
// list.size()
// list.first()
// list.last();
// list.at(3);
// list.displayNodes();
// list.removePosition(1)
// console.log('----')
// list.displayNodes();
// list.containsValue(6)
// list.containsValue(7)
list.toString();
