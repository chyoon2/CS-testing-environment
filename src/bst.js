export default class BST {
  constructor() {
    this.root = null;
  }
  remove(removeNode) {
    if (this.root === null) {
      return true;
    } else {
        let currentNode = this.root;
        while (true) {
          if (currentNode.data === removeNode.data) {
            if (currentNode.left === null && currentNode.right === null) {
              currentNode = null;
              return 'no child'
            }
            return true;
          } 
          else if (currentNode.data > removeNode.data) {
            currentNode = currentNode.left;
          } else if (currentNode.data < removeNode.data) {
            currentNode = currentNode.right;
          }
          if (currentNode === null) {
            return false; //could not find node.
          }
        }
      }
    } 
  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }

  insertNode(node) {
    this.root = node;
  }
  insert(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right
          }
        }
        else {
          return this;
        }
      }
    }
  }
}
