import pytest
import random
from ..stacks.stacks import LinkedStack
from ..linked_lists.nodes import LinkedNode

@pytest.fixture
def linked_stack():
    linked_stack = LinkedStack()

    for i in range(10):
        node = LinkedNode()
        node.id = i;
        node.data = {
            "name": "node_{}".format(i),
            "value": random.randrange(10000),
        }
        linked_stack.push(node)

    return linked_stack

def test_linked_stack_peek_top(linked_stack):
    assert linked_stack.top.id == 9


def test_linked_stack_pop(linked_stack):
    node = linked_stack.pop()

    assert node.id == 9
    assert linked_stack.size == 9

