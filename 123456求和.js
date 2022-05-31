const findNthDigit = function(n) {// n=11
    let start = 1
    let len = 1
    let base = 9
    while(n > len * base) {
      n = n - len * base//n=2
      len++ //len=2
      start *= 10 //start = 10
      base *= 10 //base = 10
    }
    let target = start + (n - 1) / len //target = 10.5
    let reminder = (n - 1) % len // reminder=1
    return (''+target).charAt(reminder)
};