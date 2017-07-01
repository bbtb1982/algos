class LinkedList:

    def __init__(self):
        self._head = None

    @property
    def head(self):
        return self._head

    @head.setter
    def head(self, node):
        self._head = node

    @property
    def size(self):
        p = self.head
        ct = 1

        if p == None:
            return 0
        else:
            while p.next is not None:
                ct += 1
                p = p.next
        return ct

    def add(self, node):
        if self.head == None:
            self.head = node
        else:
            p = self.head
            node.next = p
            self.head = node

    def includes(self, node):
        p = self.head
        if self.search(node):
            return True
        else:
            return False

    def getByIndex(self, pos):
        idx = 1
        p = self.head

        if p == None:
            return None
        else:
            while p.next is not None and idx < pos:
                p = p.next
                idx += 1
            return p

    def search(self, node):
        p = self.head

        if p == node:
            return node
        else:
            while p.next is not None and p is not node :
                p = p.next

            if p == node:
                return node
            else:
                return None

    def searchByKey(self, key, value):
        p = self.head

        if p is not None:
            if p.data[key] == value:
                return p

            while p.next is not None:
                if p.data[key] == value:
                    return p
                p = p.next

        return None

    def remove(self, node):
        p = self.head

        if p is not None:
            if p == node:
                self.head = p.next
                return

            while p.next is not None and p is not node:
                q = p
                p = p.next

            if p == node:
                q.next = p.next

        return None

    def __iter__(self):
        p = self.head

        while p is not None:
            yield p
            p = p.next

    def __len__(self):
        return self.size

    def __getitem__(self, position):
        return self.getByIndex(position)

    def __setitem__(self, key, value):
        raise "cannot set/add items via linked_list[key] = node please use linked_list.add(node)"

    def __str__(self):
        s = ""
        p = self.head
        if p is not None:
            while p.next is not None:
                nextId = p.next.id
                s += "type: {}, id: {}, nextId: {}, data: {} \n".format(type(p), p.id, nextId, p.data)
                p = p.next

            nextId = None
            s += "type: {}, id: {}, nextId: {}, data: {} \n".format(type(p), p.id, nextId, p.data)

        return s


class CircularLinkedList(LinkedList):
    def __init__(self):
        super(CircularLinkedList, self).__init__()

    def add(self, node):
        p = self.head
        node.next = self.head;

        if self.head != None:
            while p.next != self.head:
                p = p.next

            p.next = node
        else:
            print(p)
            node.next = node

        print(node)
        self.head = node


    def __iter__(self):
        p = self.head

        if p != None:
            print(p)
            while p.next != self.head:
                yield p
                p = p.next

    def __str__(self):
        s = ""
        p = self.head
        ct = 10;
        if p != None:
            while p.next != self.head:
                if ct == 0:
                    return;
                print(p)
                ct -= 1
                nextId = p.next.id
                s += "type: {}, id: {}, nextId: {}, data: {} \n".format(type(p), p.id, nextId, p.data)
                p = p.next

        nextId = None
        s += "type: {}, id: {}, nextId: {}, data: {} \n".format(type(p), p.id, nextId, p.data)

        return s


class DoublyLinkedList(LinkedList):
    def __init__(self):
        super(DoublyLinkedList, self).__init__()

    def add(self, node):
        p = self.head

        if p != None:
            p.prev = node
            node.next = p

        self.head = node

    def remove(self, node):
        p = self.head

        if p == None:
            return None

        elif p == node:
            if p.next != None:
                p.next.prev = None;

            self.head = p.next
            return

        else:
            while p.next != None and p != node:
                p = p.next

            if p.next == None:
                p.prev.next = None
            else:
                p.prev.next = p.next
                p.next.prev = p.prev


    def __str__(self):
        s = ""
        p = self.head

        if p != None:
            while p.next != None:
                prevId = None
                nextId = None

                if p.prev:
                    prevId = p.prev.id
                if p.next:
                    nextId = p.next.id

                s += "type: {}, prevId: {}, id: {}, nextId: {}, data: {} \n".format(type(p),prevId, p.id, nextId, p.data)
                p = p.next

        prevId = None
        nextId = None
        if p.prev:
            prevId = p.prev.id

        if p.next:
            nextId = p.next.id
        s += "type: {}, prevId: {}, id: {}, nextId: {}, data: {} \n".format(type(p),prevId, p.id, nextId, p.data)

        return s

