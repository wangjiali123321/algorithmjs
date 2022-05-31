// 返回其⾃底向上的层次遍历为：
//       1
//   2       2
// 3   3   3   3

// [
//     [1],
//     [2,2],
//     [3,3,3,3]
// ]

// 步骤1 从哪里转换到哪里。
// 2： 多重复几遍，达到过几遍以规避边界问题。

const levelOrderBottom = function(root) {
    const res = []
    var dep = function (node, depth){
        if(!node) return
        res[depth] = res[depth]||[]
        res[depth].push(node.val)
        dep(node.left, depth + 1)
        dep(node.right, depth + 1)
     }
    dep(root, 0)
    return res
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

root.left = level2
root.right = level2
root.val = 1
console.log(levelOrderBottom(root))


