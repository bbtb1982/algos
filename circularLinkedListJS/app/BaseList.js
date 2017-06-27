const BaseList = function BaseList() {
  this._head = null;

  Object.defineProperty(this, 'list', {
    configurable: true,
    enumerable: true,
    get() {
      return this._head;
    },
  });

  Object.defineProperty(this, 'size', {
    configurable: true,
    enumerable: true,
    get() {
      let size = 0;
      let p = this._head;
      while (p !== null) {
        p = p.next;
        size += 1;
      }

      return size;
    },
  });

  this.add = function Add(node) {
    const p = this._head;

    if (this._head !== null) {
      node.next = p;
    }

    this._head = node;
  };

  this.deleteAt = function deleteAt() {
    throw new Error('must override in subclass');
  };

  this.find = function find() {
    throw new Error('must override in subclass');
  };

  this.insertAt = function insertAt() {
    throw new Error('must override in subclass');
  };

  this.toString = function toString() {
    let p = this._head;
    let string = '';

    while (p !== null) {
      string += `{ id: ${p.id}, data: ${p.data} }\n`;
      p = p.next;
    }

    return string;
  };
};

export default BaseList;
