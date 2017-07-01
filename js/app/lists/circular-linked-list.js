import BaseList from './base-list';

const CircularLinkedList = function CircularLinkedList() {
  BaseList.call(this);

  this.add = function Add(node) {
    let current = this._head;

    node.next = this._head;

    if (this._head !== null) {
      while (current.next !== this._head) {
        current = current.next;
      }
      current.next = node;
    } else {
      node.next = node;
    }

    this._head = node;
  };

  Object.defineProperty(this, 'size', {
    configurable: true,
    enumerable: true,
    get() {
      let current = this._head;
      let ct = 0;

      if (current) {
        current = current.next;
        ct = 1;

        while (current !== this._head) {
          current = current.next;
          ct += 1;
        }
      }

      return ct;
    },
  });

  Object.defineProperty(this, 'tail', {
    configurable: true,
    enumerable: true,
    get() {
      let current = this._head;

      if (!current) {
        return null;
      }

      do {
        current = current.next;
      } while (current !== this._head);

      return current;
    },
  });

  this.delete = function deleteAt(node) {
    let p = this._head;
    let q = null;

    if (!p) {
      throw new Error('empty list');
    }

    do {
      q = p;
      p = p.next;
    } while (p !== node && p !== this._head);

    if (p === this._head) {
      q.next = p.next;
      this._head = p.next;
    } else {
      q.next = p.next;
    }
  };

  this.toString = function toString() {
    let p = this._head;
    let string = '';

    let idx = 0;
    do {
      string += `{ id: ${p.id}, nextId: ${p.next.id} data: ${p.data} }\n`;
      p = p.next;
      idx += 1;
    } while (p !== this._head && idx < 10);

    return string;
  };
};

export default CircularLinkedList;
