import pytest
import random
from ..linked_lists.lists import LinkedList
from ..linked_lists.nodes import LinkedNode

@pytest.fixture
def linked_list():
    linked_list = LinkedList()

    for i in range(10):
        node = LinkedNode()
        node.id = i;
        node.data = {
            "name": "node_{}".format(i),
            "value": random.randrange(10000),
        }
        linked_list.add(node)

    return linked_list

def test_linked_list(linked_list):
    assert linked_list.head.id == 9

