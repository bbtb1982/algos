import BaseNode from './base-node';

function CircularLinkeLNode() {
  BaseNode.call(this);
  this.next = null;
}

export default CircularLinkeLNode;
