const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}


function treeHeight(tree) {
    if(tree) { const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
    return 1 + Math.max(leftHeight, rightHeight);
        
    } else {
        return 0;
    }
}

console.log(treeHeight(tree))