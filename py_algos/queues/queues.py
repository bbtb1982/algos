class LinkedQueue:
    def __init__(self):
        self._first = None;

    @property
    def size(self):
        p = self._first
        ct = 1

        if p == None:
            return 0
        else:
            while p.next != None:
                ct += 1
                p = p.next

        return ct

    @property
    def first(self):
        return self._first

    @property
    def last(self):
        p = self._first;
        if p != None:
            while p.next != None:
                p = p.next

            return p
        else:
            return None

    def isEmpty(self):
        return self._first == None

    def enqueue(self, node):
        p = self._first

        if p == None:
            self._first = node
        else:
            if p.next != None:
                while p.next != None:
                    p = p.next

            p.next = node

    def dequeue(self):
        p = self._first;

        if p != None:
            self._first = p.next
            return p

        return None

    def __str__(self):
        string = ''
        p = self._first

        if p == None:
            return None
        else:
            while p.next != None:
                nextId = p.next.id
                string += "id: {}, data: {} nextId: {}\n".format(p.id, p.data, nextId)
                p = p.next

            string += "id: {}, data: {} nextId: {}\n".format(p.id, p.data, None)

        return string

