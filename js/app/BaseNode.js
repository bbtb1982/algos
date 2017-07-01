function BaseNode() {
  this._data = {};
  this._id = null;

  Object.defineProperty(this, 'data', {
    configurable: true,
    enumerable: true,
    get() {
      return this._data;
    },
    set(data) {
      this._data = data;
    },
  });

  Object.defineProperty(this, 'id', {
    configurable: true,
    enumerable: true,
    get() {
      return this._id;
    },
    set(id) {
      this._id = id;
    },
  });
}

export default BaseNode;
