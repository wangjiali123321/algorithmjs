// 纯数字版本号数组排序

function versionSort(versions) {
  return versions.sort((a, b) => {
    const aArr = a.split(".");
    const bArr = b.split(".");
    while (aArr.length || bArr.length) {
      const A = aArr.shift() || 0;
      const B = bArr.shift() || 0;
      if (A - B !== 0) {
        return A - B;
      }
    }
  });
}


console.log(versionSort(['1.2','1.3','1.0.1']))

// 实现具有并发限制的promise.all
function promsieTask(taskList, maxNum) {
  return new Promise((resolve, rejuct) => {
    let runCount = 0;
    let complated = 0;
    const taskNum = taskList.length;
    const resArr = [];
    let current = 0
    function handler() {
      if(runCount>=maxNum) return
      const a = taskNum - complated;
      const b = maxNum - runCount
      const arr = taskList.splice(0, a>b?b:a);
      arr.forEach((task, index) => {
        const d = current+index
        task
          .then(
            (res) => {
              console.log(current,index,res)
              resArr[current] = res;
            },
            (reason) => {
              resArr[current] = reason;
            }
          )
          .finally(() => {
            complated++;
            runCount--;
      
            if (complated === taskNum) {
              resolve(resArr);
            }
            handler();
          });
      });
      current += taskList.length
    }
    handler();
  });
}  


var mergeTwoLists = function(l1, l2) {
  const head = new ListNode()
  let current = head
  while(l1&&l2){
      if(l1.val<l2.val){
          current.next = l1 
          l1 = l1.next
      }else{
          current.next = l2
          l2 =l2.next
      }
      current = current.next
  }
  if(l1){
      current.next = l1
  }
  if(l2){
      current.next = l2
  }
  return head.next
};

输入一个正整数，输出他的两个素数因子，如没有输出 -1 -1
输入两个数组，分别从两个数组中取出一个元素相加，和作为一个元素，求K个这样的元素的最小和。坐标完全相同，属于同一个元素。
输入一个n*m的多维数组，输出一个字符串，按顺序将字符串中的每一个字符在数组中查找，要求查找位置必须相邻，且每一个元素只能使用一次。输出字符串在数组中的坐标 
牛客网的测试用例无法调试，只知道通过率分别是100%，95%，95%.实在想不出边界条件了。这里就不放出代码误导大家了。

promise、promise.all ,promise与async await的区别，async await如并发 promise
计算岛屿周长
// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
// 示例1：输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// 输出：16
// 解释：它的周长是上面图片中的 16 个黄色的边
// 示例2：输入：grid = [[1]]
// 输出：4

function search(grid) {
   let res = 0
   grid.forEach((line, i) => {
       line.forEach((item, j) => {
           if (item === 1) {
               dp(i, j)
           }
       })
   });
   function dp(i, j) {
       if (i == 0 || grid[i - 1][j] == 0) {
           res++
       }
       if (i + 1 == grid.length || grid[i + 1][j] == 0) {
           res++
       }
       if (j == 0 || grid[i][j - 1] == 0) {
           res++
       }
       if (j + 1 == grid[0][1].length || grid[i][j + 1] == 0) {
           res++
       }
   }
   return res
}
const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
console.log(search(grid))

尾递归优化 
这个是从调用栈的角度来讲的，通过尾递归优化的方式，释放中间变量
https://zhuanlan.zhihu.com/p/393711134
 ts 用过那些函数，interface和type的区别 
interface 可以拓展 extends 
interface能够声明合并 
type不可以extends、implement但是可以类型交叉
 type可以声明类型别名、联合类型、元组 interface不可以
 扁平化嵌套数组有几种方式
flat
toString().split(',')
递归

如何寻找到两个dom节点的最近公共父节点 
通过从下向上递归，并将父节点储存，比较