import pytest
import random
from ..trees.trees import Tree
from ..trees.trees import Node

@pytest.fixture
def basic_tree():
    tree = Tree()
    root = Node()
    root.id = 'root_1'
    root.data = {
        "name": "root",
        "value": random.randrange(10000),
    }

    tree.root = root

    l_sub = create_level(root, 0)
    r_sub = create_level(root, 0)

    root.left = l_sub
    root.right = r_sub


    for i in range(1, 10):
        l_sub = create_level(l_sub.left, i)
        r_sub = create_level(r_sub.right, i)

    return tree;


def create_level(root, lvl):
    left = Node()
    left.id = "left_{}".format(lvl)
    left.data = {
        "name": "left_node_{}".format(lvl),
        "value": random.randrange(10000),
    }

    right = Node()
    right.id = "right_{}".format(lvl)
    right.data = {
        "name": "right_node_{}".format(lvl),
        "value": random.randrange(10000),
    }

    root.left = left
    root.right = right

    return root


def test_tree(basic_tree):
    node = basic_tree.root
    assert True == False

