let obj1 = '{"name":"小明","age":18}'
console.log('JSON.stringify(obj)',JSON.stringify(obj1))

console.log('JSON.stringify JSON.stringify(obj)', JSON.stringify(JSON.stringify(obj1)) )
let o1 = JSON.parse( JSON.stringify(obj1) );
console.log('o1',o1,typeof o1);




let obj2 = '{name:"小明","age":18}'
let o2 = JSON.parse( obj2 );
console.log('o2',o2,typeof o2);