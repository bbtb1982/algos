const Item = function Item() {
  this._id = null;
  this._data = null;

  Object.defineProperty(this, 'id', {
    configurable: true,
    enumerable: true,
    get() {
      return this._id;
    },
    set(value) {
      this._id = value;
    },
  });

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
};

export default Item;
