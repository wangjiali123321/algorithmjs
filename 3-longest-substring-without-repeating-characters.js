/**
 * @param {string} s
 * @return {number}
 */

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function(s) {
  // var p=0, q=0; //p: start of the sub, q: end of the queue

  //hashmap in js????? Array.indexOf
  let sub = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let index = sub.indexOf(s.charAt(i));
    if (index == -1) {
      sub.push(s.charAt(i));
      // q++;
    } else {
      //find repeat, get index of repeat el, remve all el before that index
      sub = sub.slice(index + 1, sub.length);
      console.log('sub1',sub)
      sub.push(s.charAt(i));
      console.log('sub2',sub)
    }
    max = Math.max(max, sub.length);
  }
  return max;
};

console.log('lengthOfLongestSubstring("abcabcbb")',lengthOfLongestSubstring("abcabcbb"))
