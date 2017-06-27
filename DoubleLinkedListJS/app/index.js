import DoublyLinkedList from './DoublyLinkedList';
import DoublyLinkedNode from './DoublyLinkedNode';

const List = new DoublyLinkedList();
let listLen = [...Array(10)].length + 1;
let i = 0;
let size = 0;

while (listLen) {
  listLen -= 1;
  const DNode = new DoublyLinkedNode();
  DNode.id = i;
  DNode.data = {
    name: `DNode${i}`,
  };
  i += 1;
  List.add(DNode);
}
console.log('Base List');
console.log(List.toString());
console.log(`List size: ${List.size}`);


console.log('find DNode2');
console.log(`found: : ${List.find('name', 'DNode2').id}`);
console.log(`List size: ${List.size}`);
console.log(List.toString());

console.log('insertAt 1');
const DNode100 = new DoublyLinkedNode();
DNode100.id = 100;
DNode100.data = { name: 'DNode100' };
List.insertAt(DNode100, 1);
console.log(`List size: ${List.size}`);
console.log(List.toString());

console.log('insertAt Last');
size = List.size;
const DNode1100 = new DoublyLinkedNode();
DNode1100.id = 1100;
DNode1100.data = { name: 'DNode1100' };
List.insertAt(DNode1100, size);
console.log(`List size: ${List.size}`);
console.log(List.toString());

console.log('insertAt 3');
let DNode300 = new DoublyLinkedNode();
DNode300.id = 300,
DNode300.data = { name: 'DNode300'};
List.insertAt(DNode300, 3);
console.log(`List size: ${List.size}`);
console.log(List.toString());

console.log('DELETE FIRST');
console.log(List.toString());
console.log('');
List.deleteAt(1);
console.log(`List size: ${List.size}`);
console.log(List.toString());

console.log('DELETE LAST');
console.log(List.toString());
console.log('');
size = List.size;
List.deleteAt(size);
console.log(`List size: ${List.size}`);
console.log(List.toString());

console.log(List.toString());

console.log('DELETE 3');
List.deleteAt(3);
console.log(`List size: ${List.size}`);
console.log(List.toString());
