// 1. JOSN.stringify()/JSON.parse()
let obj = {a: 1, b: {x: 3}}
let obj1 = 1
JSON.parse(JSON.stringify(obj))

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target;

// 2. 递归拷贝
function deepClone(obj,map = new Map()) {
  if(typeof obj === 'object'){
    if(map.get(target)){
      return map.get(target)
    }
    let targetObj = Array.isArray(obj) ? [] : {}
    for(let i in obj){
      targetObj[i] = deepClone(obj[i])
    }
    map.set(target,targetObj)
    return targetObj
  }else{
    return obj
  }

}
// function deepClone(obj) {
//   let targetObj = {}
//   for(let i in obj){
//     targetObj[i] = obj[i]
//   }
//   return targetObj
// }


deepClone(obj)