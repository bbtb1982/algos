const LinkNode = function LinkNode() {
  this._data = {};
  this._id = null;
  this._next = null;

  Object.defineProperty(this, 'data', {
    get() {
      return this._data;
    },
    set(data) {
      this._data = data;
    },
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(this, 'id', {
    get() {
      return this._id;
    },
    set(id) {
      this._id = id;
    },
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(this, 'next', {
    get() {
      return this._next;
    },
    set(node) {
      this._next = node;
    },
    enumerable: true,
    configurable: true,

  });
};

export default LinkNode;
