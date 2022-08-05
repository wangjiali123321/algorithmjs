var a = []

for (var i = 0; i < 3; i ++) {

     (function () {

        var b = i

        a[i] = function() {

        // 注意不能直接输出i，不然依旧一样

            console.log('i为：' + i)

            console.log('b为:' + b)

        }

      }) (i)

}

a[0]()  // i为3，b为0
