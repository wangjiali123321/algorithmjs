const twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i< nums.length; i++) {
      let k = target-nums[i]
      console.log(k)
      if(map.has(k)) {
          return [map.get(k), i]
      }
     map.set(nums[i], i)
   }
   return [];
};

// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

let nums = [2,7,11,15]
let target = 9

console.log(twoSum(nums,9))