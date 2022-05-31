const levelOrderBottom = function(root) {
    if(!root) return []
    let res = [],
    queue = [root]
    while(queue.length) {
    let curr = [],
    temp = []
    while(queue.length) {
    let node = queue.shift()
    curr.push(node.val)
    if(node.left) temp.push(node.left)
    if(node.right) temp.push(node.right)
     }
    res.push(curr)
    queue = temp
     }
    return res.reverse()
    };