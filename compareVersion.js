// 接收的两个版本号为字符串格式
function versionCompare(v1, v2) {
    // 递归去掉末尾的所有'0'
    function trim(arr) {
        if(arr[arr.length - 1] == 0) {
            arr.pop();
            trim(arr);
        }else{
            return arr;
        }
    }
    var arrStr1 = v1.split('.');
    var arrStr2 = v2.split('.');
    // 转换成数字数组
    var arr1 = arrStr1.map(function(data) {
        return +data;
    });
    var arr2 = arrStr2.map(function(data) {
        return +data;
    })
    // 去调末尾的0
    trim(arr1);
    trim(arr2);
    
    if(arr1.length === arr2.length) {	// 两个版本号一样长
        for(var i = 0; i < arr1.length; i++) {
            if(arr1[i] > arr2[i]) {
                return '前者大';
            }else if(arr1[i] < arr2[i]) {
                return '后者大';
            }else if(i == (arr1.length - 1)) {	// 比到最后没分出大小则一样大
                return '一样大';
            }
        }
    }else if(arr1.length > arr2.length) {	// 前者长度更长
        for(var i = 0; i < arr2.length; i++) {
            if(arr1[i] > arr2[i]) {
                return '前者大';
            }else if(arr1[i] < arr2[i]) {
                return '后者大';
            }else if(i == (arr1.length - 1)) {	// 比到最后没分出大小则前者大（因为前者长度更长）
                return '前者大';
            }
        }
    }else{	// 后者长度更长
        for(var i = 0; i < arr1.length; i++) {
            if(arr1[i] > arr2[i]) {
                return '前者大';
            }else if(arr1[i] < arr2[i]) {
                return '后者大';
            }else if(i == (arr1.length - 1)) {	// 比到最后没分出大小则后者大（因为后者长度更长）
                return '后者大';
            }
        }
    }
}
// 测试用例
var v1 = '1';
var v2 = '1.0';
var v3 = '1.0.0.0';
var v4 = '1.0.0.1';
var v5 = '0.1';
var v6 = '2.0';
var v7 = '0.1.0.1';
var v8 = '0.1.8.1';
var v9 = '0.1.12.0';
var v10 = '01.0.1.0'

console.log(versionCompare(v3, v10))