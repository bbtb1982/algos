import SinglyLinkedNode from './SinglyLinkedNode';

function DoublyLinkedNode() {
  SinglyLinkedNode.call(this);
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
