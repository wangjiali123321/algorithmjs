function quickSort(arr) {
    //如果数组长度<=1,则直接返回
    if (arr.length <= 1) {
      return arr;
    }
    // 中间位(基准)取长度的一半向下取整
    var pivotIndex = Math.floor(arr.length / 2);
    //把中间位从原数组切割出来, splice 会改变原数组!!!!
    var pivot = arr.splice(pivotIndex, 1)[0];
    //定义两个空数组来存放比对后的值
    var left = [];
    var right = [];
  
    //比基准小的放在left，比基准大的放在right
    for (var i = 0 , j = arr.length; i < j; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    //递归下去  arr = [ left , pivot , right]
    // 怎么个递归法,就是比对后的数组还是会重复之前的取基准再切开比较..直到最后没有可以切了
    return quickSort(left).concat([pivot], quickSort(right));
}


// 二分法跟快排的思路差不多,对半比较
// 这个只用于排序好数组内的查询,高低位都知道的情况下
function binSearch(target, arr, start, end) {
    var start = start || 0; // 允许从什么位置开始,下标
    var end = end || arr.length - 1; // 什么位置结束,下标
    start >= end ? -1 : ''; // 没有找到,直接返回-1
    var mid = Math.floor((start + end) / 2); // 中位下标
    if (target == arr[mid]) {
      return mid; // 找到直接返回下标
    } else if (target > arr[mid]) {
      //目标值若是大于中位值,则下标往前走一位
      return binSearch(target, arr, start, mid - 1);
    } else {
      //若是目标值小于中位值,则下标往后退一位
      return binSearch(target, arr, mid + 1, end);
    }
}



  
  
