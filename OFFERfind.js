// 二维数组中的查找
// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find(target, array)
{
    var row = array.length-1;

    for(var i=row,j=0; i>=0 && j<array[i].length;){
        if(target == array[i][j]){
            return true;
        }else if(target > array[i][j]){
            j++;
            continue;
        }else if(target < array[i][j]){
            i--;
            continue;
        }
    }
    return false;
}