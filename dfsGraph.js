var reg = /^\d*\.{0,1}\d{0,1}$/

console.log(reg.test(1.20))

  const direction = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]
  
  let flag = false
  
  function isSameIsland(grid, row1, col1, row2, col2) {
    if (!grid[row1][col1] || !grid[row2][col2]) {
      return false
    }
    let target = [row2, col2]
    // 记录已经找过的路径 不然会死循环
    let marked = new Array(grid.length)
    for (let i = 0; i < grid.length; i++) {
      marked[i] = new Array(grid[0].length).fill(false)
    }
    marked[row1][col1] = true
    for (let i = 0; i < direction.length; i++) {
      // 四个方向出发 深度搜索
      let next = [row1 + direction[i][0], col1 + direction[i][1]]
      if (isInGrid(grid, next)) {
        dfs(grid, next, target, marked)
      }
    }
    let result = flag
    flag = false
    return result
  }
  
  function dfs(grid, cur, target, marked) {
    // console.log(cur, marked)
    // debugger
    if (!grid[cur[0]][cur[1]]) {
      // 不是岛屿
      return false
    }
    if (marked[cur[0]][cur[1]]) {
      // 该点已经走过
      return false
    }
    marked[cur[0]][cur[1]] = true
    let [x, y] = cur
    let [targetX, targetY] = target
    if (x == targetX && y == targetY) {
      flag = true
      return true
    }
    for (let i = 0; i < direction.length; i++) {
      let next = [x + direction[i][0], y + direction[i][1]]
      if (isInGrid(grid, next)) {
        dfs(grid, next, target, marked)
      }
    }
  }
  
  function isInGrid(grid, cur) {
    let [x, y] = cur
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return false
    }
    return true
  }
  
  const grid1 = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0], // row=0
    [0, 0, 1, 0, 0, 1, 0, 1, 1], // row=1
    [1, 1, 1, 1, 1, 1, 1, 0, 1], // row=2
  ]
  
  let res1 = isSameIsland(grid1, 0, 2, 1, 5) // 返回 true
  
  let res2 = isSameIsland(grid1, 0, 7, 2, 5) // 返回 false （注意 grid1 中 (1,7) 和 (2,6) 不算相邻）
  
  console.log(res1)
  console.log(res2)