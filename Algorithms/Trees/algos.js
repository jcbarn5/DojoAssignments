//Binary Search Tree Add Function
function BST_node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;

  this.add = function(val){
    if(!this.root){
      this.root = new BST_node(val);
      return;
    }

    var current = this.root;
    var Node = new BST_node(val);
    while(current){
      if(val < current.val){
        if(!current.left){
          current.left = Node;
          break;
        }
        else{
          current = current.left;
        }
      }
      else{
        if(!current.right){
          current.right = Node;
          break;
        }
        else{
          current = current.right;
        }
      }
    }
  }
}

var tree = new BST();
tree.add(7);
tree.add(8);
tree.add(6);
tree.add(9);
tree.add(22);
console.log(tree);
