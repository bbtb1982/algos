import test from 'ava';
import CLList from '../app/CLList';
import CLLNode from '../app/CLLNode';

test.beforeEach((t) => {
  const list = new CLList();
  let listLen = [...Array(5)].length;
  let i = 0;
  let size = 0;

  while (listLen) {
    listLen -= 1;
    const node = new CLLNode();

    node.id = i;
    node.data = {
      name: `CLLNode${i}`,
    };
    i += 1;
    list.add(node);
  }

  t.context.data = {
    list,
  };
});

test('can add node to CLList', async (t) => {
  const list = new CLList();
  const node0 = new CLLNode();
  const node1 = new CLLNode();
  const node2 = new CLLNode();
  const node3 = new CLLNode();

  node0.id = 0;
  node1.id = 1;
  node2.id = 2;
  node3.id = 3;

  list.add(node0);
  list.add(node1);
  list.add(node2);
  list.add(node3);
  let idx = 0;
  let node = list.list;

  while(idx < 10) {
    idx += 1;
    node = node.next;
  }

  t.is(await list.size, 4);
});

test('can delete first node in list', async (t) => {
  const list = new CLList();
  const node0 = new CLLNode();
  const node1 = new CLLNode();
  const node2 = new CLLNode();
  const node3 = new CLLNode();

  node0.id = 0;
  node1.id = 1;
  node2.id = 2;
  node3.id = 3;

  list.add(node0);
  list.add(node1);
  list.add(node2);
  list.add(node3);

  console.log(list.toString());
  list.delete(node3);
  console.log(list.toString());

  t.is(await list.list.id, 2);
});
