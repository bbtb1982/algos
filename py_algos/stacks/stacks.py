class LinkedStack:
    def __init__(self):
        self.top = None

    @property
    def top(self):
        return self._top

    @top.setter
    def top(self, node):
        self._top = node

    @property
    def size(self):
        p = self._top
        ct = 1;

        if p == None:
            return 0;
        else:
            while p.next != None:
                ct += 1
                p = p.next

        return ct

    def pop(self):
        p = self._top

        if p != None:
            if p.next != None:
                self._top = p.next
            else:
                self._top = None

            return p;
        else:
            return None

    def push(self, node):
        p = self._top

        if p != None:
            node.next = p

        self._top = node


