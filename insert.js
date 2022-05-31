function insertSort(array) {

    let length = array.length;
  
    // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 
    if (!Array.isArray(array) || length <= 1) return;
  
    // 循环从 1 开始，0 位置为默认的已排序的序列
    for (let i = 1; i < length; i++) {
      let temp = array[i]; // 保存当前需要排序的元素
      let j = i;
  
      // 在当前已排序序列中比较，如果比需要排序的元素大，就依次往后移动位置
      while (j -1 >= 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
  
      // 将找到的位置插入元素
      array[j] = temp;

      console.log('array',array)
    }
  
    return array;
  }


console.log(insertSort([54,76,434,32,23,42,546]))