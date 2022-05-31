function selectSort(array) {

    let length = array.length;

    // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 
    if (!Array.isArray(array) || length <= 1) return;

    for (let i = 0; i < length - 1; i++) {

        let minIndex = i; // 设置当前循环最小元素索引

        for (let j = i + 1; j < length; j++) {

            // 如果当前元素比最小元素索引，则更新最小元素索引
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }

        // 交换最小元素到当前位置
        // [array[i], array[minIndex]] = [array[minIndex], array[i]];
        swap(array, i, minIndex);
    }

    return array;
}

// 交换数组中两个元素的位置
function swap(array, left, right) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}