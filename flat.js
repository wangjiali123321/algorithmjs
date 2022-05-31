var numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  console.log(total,num)
  return total + Math.round(num);
}
console.log(numbers,numbers.reduce(getSum, 0))


function flattenDeep(arr) {
  return Array.isArray(arr) ? arr.reduce( (acc, cur) => [...acc, ...flattenDeep(cur)] , [])
   : [arr] 
}

function flat(arr, depth = 1) {
  return depth > 0 ? arr.reduce((acc, cur) => {
    if(Array.isArray(cur)) {
       return [...acc, ...flat(cur, depth-1)]
    }
    return [...acc, cur]
   } , [])
   : arr
}