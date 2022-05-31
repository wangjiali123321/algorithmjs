
function twoSum(a,b){
    var n = Math.max(a.length,b.length)
    //前面补0使得俩数长度一样
    a = a.padStart(n,0)
    b = b.padStart(n,0)
    
    var c = 0
    // 进位
    // 结果
    var res = ''
    for(let i = n-1;i>=0;i--){
      console.log(parseInt(a[i]) ,parseInt(b[i])  , c)
      t = parseInt(a[i])  +parseInt(b[i])  + c
      // 判断进位
      c = Math.floor(t/10)

      console.log('c',c)
      // 保留余数
      t = t%10

      console.log('t',t)
      // 注意：每一步算出来的结果需要放在右边上。
      res = t + res
      console.log('res',res)
    }
    if (c === 1){
      res = '1' + res
    }
    return res
}
console.log(twoSum("9810", "2380"))
// largeNumAdd("12883927392839810", "23793183088791481382380");

