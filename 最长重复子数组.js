// A: [1,2,3,2,1]
// B: [3,2,1,4,7]

const findLength = (A, B) => {
    const m = A.length;//5
    const n = B.length;//5
    let res = 0;
    for (let i = 0; i < m; i++) {//0
      for (let j = 0; j < n; j++) {//2
        if (A[i] == B[j]) { // 遇到相同项
          let subLen = 1;   // 公共子序列长度至少为1
          while (i + subLen < m && j + subLen < n && A[i + subLen] == B[j + subLen]) { //新的一项也相同
            subLen++; // 公共子序列长度每次增加 1，考察新的一项
          }
          res = Math.max(subLen, res);
        }
      }
    }
    return res;
};



