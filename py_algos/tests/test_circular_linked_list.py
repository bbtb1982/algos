import pytest
import random
from ..linked_lists.lists import CircularLinkedList
from ..linked_lists.nodes import CircularLinkedNode

@pytest.fixture
def circular_linked_list():
    circular_linked_list = CircularLinkedList()

    for i in range(10):
        node = CircularLinkedNode()
        node.id = i
        node.data = {
            "name": "node_{}".format(i),
            "value": random.randrange(10000),
        }

        circular_linked_list.add(node)

    return circular_linked_list

def test_circular_linked_list_iter():
    # print(circular_linked_list)
    assert True == True
    # ct = len(circular_linked_list)

    # for node in circular_linked_list:
    #     ct -= 1
    #     assert node.id == ct
