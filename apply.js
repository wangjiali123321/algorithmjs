Function.prototype.apply = function(context) {
  console.log('context',context,'this',this,'window',window,'arguments',arguments)
  const cxt = context || window;

  // 将当前被调用的方法定义在cxt.fuc上.(为了能以对象调用的形式绑定this)
  cxt.func = this;

  //以对象调用的形式调用func,此时this指向ctx 也就是传入的需要绑定的this指向
  const res = arguments[1] ? cxt.func(...arguments[1]) : cxt.func();

  //删除该方法,不然会对传入对象造成污染(添加该方法)
  delete cxt.func;

  return res;
};

var name = '小王',age = 17
var obj = {
  name: '小张',
  objAge: this.age,
  myFun:function(fm,t){
    console.log(this.name + '年龄' + this.age,'来自' + fm + '去往' + t)
  }
}

var db = {
  name: '德玛',
  age: 99
}


obj.myFun.call(db,'成都','上海');
obj.myFun.apply(db,['成都','上海']); 
obj.myFun.bind(db,'成都','上海')(); 
obj.myFun.bind(db,['成都','上海'])();
