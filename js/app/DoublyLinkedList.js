import SinglyLinkedList from './SinglyLinkedList';

const DoublyLinkedList = function DoublyLinkedList() {
  SinglyLinkedList.call(this);

  this.add = function add(node) {
    const p = this._head;

    if (p !== null) {
      p.prev = node;
      node.next = p;
    }

    this._head = node;
  };

  this.deleteAt = function deleteAt(pos) {
    let idx = 1;
    let p = this._head;

    //if (pos === 1) {
    //  if (p.next !== null) {
    //    q = p.next;
    //    q.prev = null;
    //    this._head = q;
    //  } else {
    //    this._head = null;
    //  }
    //  return;
    //}

    while (p !== null && idx < pos) {
      idx += 1;
      p = p.next;
    }

    let prevNode = p.prev;
    let nextNode = p.next;

    //console.log(p);
    console.log(prevNode);
    //console.log(nextNode);

    if (nextNode) {
      nextNode.prev = prevNode;
    }

    if (prevNode) {
      prevNode.next = nextNode;
    } else {
      this._head = nextNode;
    }
  };

  this.insertAt = function insertAt(node, pos) {
    let idx = 1;
    let p = this._head;
    let q = null;

    if (pos === 1) {
      node.next = p;

      if (p) {
        p.prev = node;
      }

      this._head = node;
      return;
    }

    while (p !== null && idx < pos) {
      idx += 1;
      q = p;
      p = p.next;
    }

    if (pos === this.size) {
      p.next = node;
      node.prev = p;
    } else {
      q.next = node;
      node.prev = q;
      node.next = p;
      p.prev = node;
    }
  };

  this.toString = function toString() {
    let p = this._head;
    let string = '';

    while (p !== null) {
      const prevId = (p.prev) ? p.prev.id : null;
      const nextId = (p.next) ? p.next.id : null;

      string += `{ id: ${p.id}, prevId: ${prevId}, nextId: ${nextId}, data: ${p.data} }\n`;
      p = p.next;
    }

    return string;
  };
};

export default DoublyLinkedList;
