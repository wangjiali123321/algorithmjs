console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
  
  Promise.resolve().then(() => {
    console.log(6)
  }).then(() => {
    console.log(7)
    
    setTimeout(() => {
      console.log(8)
    }, 0);
  });
})

setTimeout(() => {
   console.log(9)
}, 0);
console.log(10)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1 4 10 2  5 3 6 7 9 8

正确：1，4，10，5，6，7，2，3，9，8 
marcro: 
setTimeout(() => {
    console.log(9)
 }, 0);
 setTimeout(() => {
    console.log(8)
  }, 0);

micro: 