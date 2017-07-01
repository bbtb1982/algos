import UnorderedList from './UnorderedList';
import LinkNode from './LinkNode';


const List = new UnorderedList();
console.log(List.tt);
let len = [...Array(2)].length + 1;
let i = 0;
console.log(List.size);

while(len--) {
  let node = new LinkNode();
  node.id = len;
  node.data = {
    name: `Node${i}`,
  }
  List.add(node);
  i++;
}
console.log('\nLIST');
List.toString();
console.log(List.size);

let new_node = new LinkNode();
new_node.id = 100;
new_node.data = { name: "new_node_100" }

console.log('\ninsertAt');
List.insertAt(new_node, 2);
List.toString();
console.log(List.size);

console.log('\ndeleteAt');
List.deleteAt(2);
List.toString();
console.log(List.size);


console.log("\nFind");
new_node.id = 100;
new_node.data = { name: "new_node_100" }
List.insertAt(new_node, 2);
let found_node = List.find('name', 'new_node_100');
console.log(found_node.id);

List.deleteNodeById(100);
console.log("\nDeleteNodeById");
List.toString();


