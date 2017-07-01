import test from 'ava';
import Queue from '../../app/queues/queue'
import Item from '../../app/queues/item'


test('can enqueue, dequeue, peek', t => {
  const queue = new Queue();

  for (let i=0; i<2; i += 1) {
    const item = new Item();
    const id = i;

    item.id = id;
    item.data = {
      name: `item${id}`,
      value: id,
    }
    queue.enqueue(item);
  }

  //console.log(queue.toString());
  t.is(queue.size, 2, 'queue size');
  t.is(queue.front.id, 0, 'can peek front of queue');
  t.is(queue.size, 2, 'queue size');

  let i = queue.dequeue();
  t.is(i.id, 0, 'get front item from queue');
  t.is(queue.size, 1, 'stack size');
});


