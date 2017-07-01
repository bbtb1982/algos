const Stack = function Stack() {
  this._stack = [];
  this._data = {};

  Object.defineProperty(this, 'size', {
    configurable: true,
    enumerable: true,
    get() {
      return this._stack.length;
    },
    set() {},
  });

  Object.defineProperty(this, 'top', {
    configurable: true,
    enumerable: true,
    get() {
      return this._stack[this._stack.length - 1];
    },
    //set() {},
  });

  this.isEmpty = function isEmpty() {};

  this.pop = function pop() {
    return this._stack.pop();
  };

  this.push = function push(item) {
    this._stack.push(item);
  };

  this.toString = function toString() {
    let string = '';
    let len = this._stack.length;

    while (len) {
      len -= 1;
      const item = this._stack[len];
      string += `id: ${item.id}, data: ${item.data} \n`;
    }

    return string;
  };
};

export default Stack;
