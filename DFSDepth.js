//       1
//   2       2
// 3   3   3   3

// [
//     [1],
//     [2,2],
//     [3,3,3,3]
// ]

const levelOrderBottom = function(root) {
    var dep = function(node){
        if(!node){
            return 0
        }
        return 1 + Math.max(dep(node.left),dep(node.right))
    }
    
    return dep(root)
};

function jimTree(){
    this.left = null
    this.right = null
    this.val = null
}
let root = new jimTree()

let level1 = new jimTree()
level1.val = 3

let level2 = new jimTree()
level2.left = level1
level2.right = level1
level2.val = 2

let level3 = new jimTree()
level3.val = 'dsadsa'
level3.left = level2
level3.right = level2

root.left = level3
root.right = level3
root.val = 1
console.log(levelOrderBottom(root))

// 1
// 2   2
// 33  33
