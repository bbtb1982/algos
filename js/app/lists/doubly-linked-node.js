import LinkedNode from './linked-node';

function DoublyLinkedNode() {
  LinkedNode.call(this);
  this._prev = null;

  Object.defineProperty(this, 'prev', {
    configurable: true,
    enumerable: true,
    get() {
      return this._prev;
    },
    set(prev) {
      this._prev = prev;
    },
  });
}

export default DoublyLinkedNode;
