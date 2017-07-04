class LinkedNode:
    def __init__(self):
        self._data = None
        self._id = None
        self._next = None

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
    def next(self):
        return self._next

    @next.setter
    def next(self, node):
        self._next = node

    def __str__(self):
        nextId = None

        if self.next:
            nextId = self.next.id

        return "type: {}, id: {}, nextId: {}".format(type(self), self.id, nextId)


class CircularLinkedNode(LinkedNode):
    def __init__(self):
        super(CircularLinkedNode, self).__init__()
        self._data = None
        self._id = None
        self._next = self


class DoublyLinkedNode(LinkedNode):
    def __init__(self):
        super(DoublyLinkedNode, self).__init__()
        self._next = None
        self._prev = None
        self._id = None
        self._data = None

    @property
    def prev(self):
        return self._prev

    @prev.setter
    def prev(self, node):
        self._prev = node

    def __str__(self):
        prevId = None
        nextId = None

        if self.prev:
            prevId = self.prev.id

        if self.next:
            nextId = self.next.id

        return "type: {}, prevId: {}, id: {}, nextId: {}".format(type(self), prevId, self.id, nextId)


