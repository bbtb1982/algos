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

def test_doubly_linked_list_iter(doubly_linked_list):
    ct = len(doubly_linked_list)
    for node in doubly_linked_list:
        ct -= 1
        assert node.id == ct

def test_doubly_linked_list_print(doubly_linked_list):
    v = str(doubly_linked_list)
    assert isinstance(v, str) == True

def test_doubly_linked_list_getByIndex(doubly_linked_list):
    node = doubly_linked_list.getByIndex(2)
    assert node.id == 8

def test_doubly_linked_list_includes(doubly_linked_list):
    node = doubly_linked_list.getByIndex(1)
    not_node = DoublyLinkedNode()

    assert doubly_linked_list.includes(node) == True
    assert doubly_linked_list.includes(not_node) == False

def test_doubly_linked_list_search(doubly_linked_list):
    node = doubly_linked_list.getByIndex(1)

    assert node.id == 9

def test_doubly_linked_list_searchByKey(doubly_linked_list):
    node = doubly_linked_list.searchByKey('name', 'node_9')

    assert node.id == 9

def test_doubly_linked_list_add(doubly_linked_list):
    node = DoublyLinkedNode()
    node.id = 100
    node.data = {
        'name': 'node_100',
        'value': random.randrange(1000),
    }
    doubly_linked_list.add(node)

    assert doubly_linked_list.includes(node) == True

def test_doubly_linked_list_remove(doubly_linked_list):
    node = doubly_linked_list.getByIndex(1)
    doubly_linked_list.remove(node)
    assert doubly_linked_list.includes(node) == False

def test_doubly_linked_list_remove_last(doubly_linked_list):
    node = doubly_linked_list.getByIndex(10)

    doubly_linked_list.remove(node)
    assert doubly_linked_list.includes(node) == False

def test_doubly_linked_list_remove_intermediate(doubly_linked_list):
    node = doubly_linked_list.getByIndex(5)

    doubly_linked_list.remove(node)
    assert doubly_linked_list.includes(node) == False

