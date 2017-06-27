import pytest
import random
from ..linked_lists.lists import DoublyLinkedList
from ..linked_lists.nodes import DoublyLinkedNode


@pytest.fixture
def doubly_linked_list():
    doubly_linked_list = DoublyLinkedList()

    for i in range(10):
        node = DoublyLinkedNode()
        node.id = i
        node.data = {
            "name": "node_{}".format(i),
            "value": random.randrange(100000),
        }

        doubly_linked_list.add(node);

    return doubly_linked_list


def test_doubly_linked_list_print(doubly_linked_list):
    v = str(doubly_linked_list)
    assert isinstance(v, str) == True

def test_doubly_linked_list_getByIndex(doubly_linked_list):
    node = doubly_linked_list.getByIndex(2)
    assert node.id == 8;


# def test_doubly_linked_list_remove_node_first():
#     doubly_linked_list = DoublyLinkedList()
#     node = DoublyLinkedNode()
#     node.id = 1
#     node.data = {'name': 'node_1', 'value': random.randrange(10000)}
#
#     doubly_linked_list.add(node)
#     doubly_linked_list.remove(node)
#
#     assert len(doubly_linked_list) == 0
#
# def test_doubly_linked_list_remove_node_first():
#     doubly_linked_list = DoublyLinkedList()
#     node1 = DoublyLinkedNode()
#     node1.id = 1
#     node1.data = {'name': 'node_1', 'value': random.randrange(10000)}
#
#     node2 = DoublyLinkedNode()
#     node2.id = 2
#     node2.data = {'name': 'node_2', 'value': random.randrange(10000)}
#
#     doubly_linked_list.add(node1)
#     doubly_linked_list.add(node2)
#
#     doubly_linked_list.remove(node2)
#
#     assert len(doubly_linked_list) == 1

