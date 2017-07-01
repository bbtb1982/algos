import test from 'ava';
import Stack from '../../app/stacks/stack'
import Item from '../../app/stacks/item'


test('can push to stack', t => {
  const stack = new Stack();
  const item1 = new Item();
  const item2 = new Item();

  for (let i=0; i<2; i += 1) {
    const item = new Item();
    const id = i+1;

    item.id = id;
    item.data = {
      name: `item${id}`,
      value: id,
    }
    stack.push(item);
  }

  t.is(stack.size, 2, 'stack size');
  t.is(stack.top.id, 2, 'can access top without popping from stack');
  t.is(stack.size, 2, 'stack size');

  let i = stack.pop();
  t.is(stack.size, 1, 'stack size');
});

