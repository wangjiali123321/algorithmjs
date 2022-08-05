function Parent(name) {
    this.parent = name
}
Parent.prototype.say = function() {
    console.log(`${this.parent}: 你打篮球的样子像kunkun`)
}
function Child(name, parent) {
    // 将父类的构造函数绑定在子类上
    Parent.call(this, parent)
    this.child = name
}


// let a = new URL() "/slab-match/api/v1/player/match/user/detail?matchId=159&relationId=159&relationType=slab-match"

let url = "/slab-match/api/v1/player/match/user/detail?matchId=176&relationId=176&relationType=slab-match";
console.log('parseParam(url)',parseParam(url)) 
function parseParam(url) {
    console.log('/.+\?(.+)$/.exec(url)',/.+\?(.+)$/.exec(url)) 

    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来

    console.log('paramsStr',paramsStr) 
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    console.log('paramsArr',paramsArr) 
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
      if (/=/.test(param)) { // 处理有 value 的参数
        let [key, val] = param.split('='); // 分割 key 和 value
        val = decodeURIComponent(val); // 解码
        val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
  
        if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
          paramsObj[key] = [].concat(paramsObj[key], val);
        } else { // 如果对象没有这个 key，创建 key 并设置值
          paramsObj[key] = val;
        }
      } else { // 处理没有 value 的参数
        paramsObj[param] = true;
      }
    })
  
    return paramsObj;
}



/** 
 1. 这一步不用Child.prototype =Parent.prototype的原因是怕共享内存，修改父类原型对象就会影响子类
 2. 不用Child.prototype = new Parent()的原因是会调用2次父类的构造方法（另一次是call），会存在一份多余的父类实例属性
3. Object.create是创建了父类原型的副本，与父类原型完全隔离
*/

Object.mycreate = function mycreate(prototype){
    function fn(){}
    fn.prototype = prototype;
    // 创建fn的实例  实例.__proto__ = prototype
    return new fn;
}


Child.prototype = Object.create(Parent.prototype);
Child.prototype.say = function() {
    console.log(`${this.parent}好，我是练习时长两年半的${this.child}`);
}

// 注意记得把子类的构造指向子类本身
Child.prototype.constructor = Child;

var parent = new Parent('father');
parent.say() // father: 你打篮球的样子像kunkun

var child = new Child('cxk', 'father');
child.say() // father好，我是练习时长两年半的cxk
