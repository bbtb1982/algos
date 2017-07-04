import pytest
import random
from ..queues.queues import LinkedQueue
from ..linked_lists.nodes import LinkedNode

@pytest.fixture
def linked_queue():
    linked_queue = LinkedQueue()

    for i in range(10):
        node = LinkedNode()
        node.id = i;
        node.data = {
            "name": "node_{}".format(i),
            "value": random.randrange(10000),
        }
        linked_queue.enqueue(node)

    return linked_queue

def test_linked_queue_peek_first_and_last(linked_queue):
    assert linked_queue.first.id == 0
    assert linked_queue.last.id == 9


def test_linked_stack_dequeue(linked_queue):
    node = linked_queue.dequeue()

    assert node.id == 0
    assert linked_queue.first.id == 1
    assert linked_queue.size == 9

