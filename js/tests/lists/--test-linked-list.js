import test from 'ava';
import LinkedList from '../../app/lists/LinkedList'

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});
