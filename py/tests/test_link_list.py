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

def test_linked_list_size(linked_list):
    assert linked_list.size == 10
    assert len(linked_list) == 10

def test_linked_list_raise_error_on__setitem__(linked_list):
    with pytest.raises(Exception):
        linked_list[2] = "stuff"

def test_linked_list_getByIndex(linked_list):
    node = linked_list.getByIndex(2)

    assert linked_list[2].id == 8
    assert node.id == 8

def test_linked_list_inclues(linked_list):
    not_node = LinkedNode()
    not_node.id = 100
    not_node.data = {
        "name": "node_{}".format(100),
        "value": random.randrange(10000),
    }

    node = linked_list.getByIndex(3)

    assert linked_list.includes(node) == True
    assert linked_list.includes(not_node) == False

def test_linked_list_iterator(linked_list):
    for node in linked_list:
        assert node.id != None

def test_linked_list_iterator_empty():
    linked_list = LinkedList()

    for node in linked_list:
        print(node)
        assert True is not False
    else:
        assert True == True

def test_linked_list_searchByKey(linked_list):
    node = linked_list.searchByKey("name", "node_4")
    not_node = linked_list.searchByKey("name", "node_1000")

    assert node.id == 4
    assert not_node == None

def test_linked_list_remove_first(linked_list):
    node = linked_list.getByIndex(1)
    linked_list.remove(node)

    assert linked_list.size == 9
    assert linked_list.head.id == 8

def test_linked_list_remove_last(linked_list):
    node = linked_list.getByIndex(10)
    linked_list.remove(node)

    assert len(linked_list) == 9

def test_linked_list_remove_intermediate(linked_list):
    node = linked_list.getByIndex(5)
    linked_list.remove(node)

    assert len(linked_list) == 9

if __name__ == '__main__':
    unittest.main()
