const Queue = function Queue() {
  this._queue = [];
  this._size = null;
  this._front = null;

  Object.defineProperty(this, 'front', {
    configurable: true,
    enumerable: true,
    get() {
      return this._queue[0];
    },
  });

  Object.defineProperty(this, 'size', {
    configurable: true,
    enumerable: false,
    get() {
      return this._queue.length;
    },
  });

  this.enqueue = function enqueue(item) {
    this._queue.push(item);
  };

  this.dequeue = function dequeue() {
    return this._queue.shift();
  };

  this.toString = function toString() {
    let string = '';
    let len = this._queue.length;

    while (len) {
      len -= 1;
      const item = this._queue[len];
      string += `id: ${item.id}, data: ${item.data} \n`;
    }

    return string;
  };
};

export default Queue;
