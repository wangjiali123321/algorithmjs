// 添加带有效期的set方法，expired 单位(毫秒)
localStorage.__proto__.setExpiredItem  = function(key, value, expired){
	this.setItem(key, value);
	if(expired){
		this.setItem([`${key}__expires__`], Date.now() + expired);
	}
}
// 添加带有效期的get方法
localStorage.__proto__.getExpiredItem = function(key){
	var expired = this.getItem([`${key}__expires__`]);
	var result;
	if(expired){
		var nowDate = Date.now();
		if(nowDate-expired > 0){
			// 已经超时, 删除该键值
			this.removeItem(key);
			this.removeItem([`${key}__expires__`]);
			result = null;
		}else{
			result = this.getItem(key);
		}
	}else{
		result = this.getItem(key);
	}
	return result;
}
 
// 过期。结果为null，而且localStorage里的相关键值被移除
localStorage.setExpiredItem('id','1', 4000);
setTimeout(function(){
	console.log(localStorage.getExpiredItem('id')); // null
},5000)
 
// 未过期。结果为1，localStorage里键值依旧存在
localStorage.setExpiredItem('id','1', 6000);
setTimeout(function(){
	console.log(localStorage.getExpiredItem('id')); // 1
},5000)
 
// 当未设置有效期时，效果等同于setItem和getItem
localStorage.setExpiredItem('id','1');
setTimeout(function(){
	console.log(localStorage.getExpiredItem('id')); // 1
},5000)