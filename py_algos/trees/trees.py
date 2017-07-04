class Tree:
    def __init__(self):
        self.root = None;

class Node:
    def __init__(self):
        self._data = None
        self._id = None
        self._left = None
        self._right = None

    @property
    def data(self):
        return self._data

    @data.setter
    def data(self, data):
        self._data = data

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def left(self):
        return self._left

    @left.setter
    def left(self, node):
        self._left = node

    @property
    def right(self):
        return self._right

    @right.setter
    def right(self, node):
        self._right = node

    def __str__(self):
        return  "id: {}, data: {}".format(self.id, self.data)
