/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

  
// randomNum(5,99)
var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;


const merge = function(nums1, m, nums2, n) {
    let len1 = m - 1,
    len2 = n - 1,
    len = m + n - 1
    while(len2 >= 0) {
      if(len1 < 0) {
        nums1[len--] = nums2[len2--]
        continue
      }
      console.log(len,len1,len2)
      nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--]:nums2[len2--]
      
      console.log(nums1)
    }
};

merge(nums1,m,nums2,n);

// 5 2 2
// 合并二个数组.js:29 (6) [1, 2, 3, 0, 0, 6]
// 合并二个数组.js:26 4 2 1
// 合并二个数组.js:29 (6) [1, 2, 3, 0, 5, 6]
// 合并二个数组.js:26 3 2 0
// 合并二个数组.js:29 (6) [1, 2, 3, 3, 5, 6]
// 合并二个数组.js:26 2 1 0
// 合并二个数组.js:29 (6) [1, 2, 2, 3, 5, 6]
// 合并二个数组.js:26 1 0 0
// 合并二个数组.js:29 (6) [1, 2, 2, 3, 5, 6]