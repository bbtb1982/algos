import test from 'ava';
import DoublyLinkedList from '../app/DoublyLinkedList';
import DoublyLinkedNode from '../app/DoublyLinkedNode';

test.beforeEach((t) => {
  const List = new DoublyLinkedList();
  let listLen = [...Array(5)].length + 1;
  let i = 0;
  let size = 0;

  while (listLen) {
    listLen -= 1;
    const DNode = new DoublyLinkedNode();
    DNode.id = i;
    DNode.data = {
      name: `DNode${i}`,
    };
    i += 1;
    List.add(DNode);
  }

  t.context.data = {
    List,
  };
});

test('can add node to beginning of list when list is empty', async (t) => {
  const List = new DoublyLinkedList();
  const DNode = new DoublyLinkedNode();
  DNode.id = 1;
  List.add(DNode);

  t.is(await List.list.id, 1);
});

test('can add node to beginning of list when head is node', async (t) => {
  const List = new DoublyLinkedList();
  const DNode1 = new DoublyLinkedNode();
  const DNode2 = new DoublyLinkedNode();
  DNode1.id = 1;
  DNode2.id = 2;

  List.add(DNode1);
  List.add(DNode2);
	let listLen = List.size;
	let pos = 1;
  let node = List.list;


 	while (pos < listLen) {
 		node = node.next;
		pos += 1;
 	}
  t.is(await node.id, 1);

});

test.todo('can traverse forward in list');

test('can traverse backwards in list', async (t) => {
	let List = t.context.data.List;
	let pos = 1;
	let traverseBack = 3;
	let listLen = List.size;
	let node = List.list;


 	while (pos < listLen) {
 		node = node.next;
		pos += 1;
 	}

	while(traverseBack) {
		node = node.prev;
		traverseBack -= 1;
	}

	t.is(await node.id, 3);
});

test.todo('can insert when head is empty');
test.todo('can insert when head is node');
test.todo('can insert when head has next');

test.todo('can insertAt tail');

test.todo('can insertAt in the middle');

test.todo('can not delete when list is empty');
test.todo('can delete in list with head');
test.todo('can delete in list when head has next.')
test.todo('can delete last node in list');
test.todo('can delete intermediate node in list');

test.todo('can find in list');
