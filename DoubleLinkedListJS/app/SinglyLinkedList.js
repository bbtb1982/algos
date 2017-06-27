import BaseList from './BaseList';

const SinglyLinkedList = function SinglyLinkedList() {
  BaseList.call(this);

  this.deleteAt = function deleteAt(pos) {
    const size = this.size;
    let p = this._head;
    let q = null;
    let idx = 1;

    if ((pos < 0) || (pos > size)) {
      throw new Error('position is out of bounds');
    }

    if (pos === 1) {
      this._head = p.next;
      return;
    }

    while (p !== null && idx < pos) {
      idx += 1;
      q = p;
      p = p.next;
    }

    /* end */
    if (idx === size) {
      q.next = null;
      return;
    }

    /* middle */
    q.next = p.next;
  };

  this.find = function find(key, value) {
    let p = this._head;

    while (p !== null && p.data[key] !== value) {
      p = p.next;
    }

    return p;
  };

  this.insertAt = function insertAt(node, pos) {
    let idx = 1;
    let p = this._head;
    let q = null;

    if (pos === 1) {
      node.next = p;
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
    } else {
      q.next = node;
      node.next = p;
    }
  };
};

export default SinglyLinkedList;
