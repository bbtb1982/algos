function thowHeadError(node, method) {
  if(node == null) {
    throw new Error(`head Must not be null to use ${method}`);
  }
};

function outOfBoundsError(size, pos) {
  if(pos < 0 || pos > size ) {
    throw new Error(`${pos} must be in range (0..${size}]`)
  }
}

function UnorderedList() {
  this._head =  null;
  this._size = 0;

  Object.defineProperty(this, 'list', {
    get: function() {
      return this._head;
    },
    set: function(value) {},
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(this, 'size', {
    get: function() {
      return this._size;
    },
    enumerable: true,
    configurable: true,
  });

  this.add = function(node) {
    let temp = this._head;

    if(temp !== null) {
      node.next = temp;
      this._head = node;
      this._size++;
    }

    this._head = node;
  };

  this.deleteNodeById = function(id){
    let temp = null;
    let curr = this._head;
    let i = 1;

    thowHeadError(curr, 'deleteAt');

    if(curr.id === id) {
      temp = curr.next;
      this._head = temp;
      return
    }

    while(curr.next !== null) {
      temp = curr;
      curr = curr.next;
      if(curr.id === id) {
        curr = curr.next.next;
        return;
      }
    }
  },

  this.deleteAt = function(pos) {
    let temp = null;
    let curr = this._head;
    let i = 1;

    thowHeadError(curr, 'deleteAt');
    outOfBoundsError(this.size, pos);
    while(curr.next !== null && i < pos){
      temp = curr;
      curr = curr.next;
      i++;
    }

    temp.next = curr.next;
    this._size--;
  };

  this.find = function(key, term) {
    let curr = this._head;
    thowHeadError(curr, 'deleteAt');
    if(curr.data[key] === term) {
      return curr;
    }

    while(curr.next !== null) {
      if(curr.data[key] === term) {
        return curr;
      }
      curr = curr.next;
    }
  };

  this.insertAt = function(node, pos) {
    let temp = null;
    let curr = this._head;
    let i = 1;

    thowHeadError(curr, 'insertAt');
    outOfBoundsError(this.size, pos);

    if(pos == 1) {
      node.next = curr;
      this._head = node;
      return;
    }

    while(curr.next !== null && i < pos) {
      temp = curr;
      curr = curr.next;
      i++;
    }

    temp.next = node;
    node.next = curr;
    this._size++;
  };

  this.reset = function() {
    this._head = null;
    this._size = 0;
  };

  this.walk = function(cb) {
    let node = this._head;
    thowHeadError(node, 'walk');

    while(node.next != null) {
      cb(node);
      node = node.next;
    }
  };
}

UnorderedList.prototype.toString = function() {
  let node = this._head;
  console.log('\nprinting linkedList');
  while(node.next != null) {
    console.log(node.data);
    node = node.next;
  }
}

export default UnorderedList;
