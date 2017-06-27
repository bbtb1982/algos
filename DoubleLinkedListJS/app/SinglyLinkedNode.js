import BaseNode from './BaseNode';

function SinglyLinkedNode() {
  BaseNode.call(this);
  this._next = null;

  Object.defineProperty(this, 'next', {
    configurable: true,
    enumerable: true,
    get() {
      return this._next;
    },
    set(node) {
      this._next = node;
    },
  });
}


export default SinglyLinkedNode;
