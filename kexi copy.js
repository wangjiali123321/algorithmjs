function sum(a,b,c,d,e){
    return a+b+c+d+e;
}
function curry(fn,...args){
    var f = function(...nextArgs){
        var allArgs = [...args,...nextArgs];
        return curry(fn,...allArgs);
    }
    //用valueOf计算最后结果
    f.valueOf = function(){
    	return fn.apply(null,args);
    }
    return f;
}
var currySum = curry(sum); // 输出：15
console.log('currySum(1,2,3)(4)(5).valueOf()',currySum(1,2,3)(4)(5).valueOf())

// function createCurry(func, args) {

//     var arity = func.length;
//     var args = args || [];

//     return function() {
//         var _args = [].slice.call(arguments);
//         [].push.apply(_args, args);

//         // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
//         if (_args.length < arity) {
//             return createCurry.call(this, func, _args);
//         }

//         // 参数收集完毕，则执行func
//         return func.apply(this, _args);
//     }
// }

// es6
// function currying (callback, ...initialParam) {
//     return (...param) => {
//         return ((params) => {
//             return params.length === callback.length ? callback(...params) : currying(callback, ...params)
//         })([...initialParam, ...param])
//     }
// }

// es5
// function currying () {
//     let initialParams = Array.prototype.slice.call(arguments)
//     let callback = params.shift()
//     return function () {
//         return (function (params) {
//             return params.length === callback.length ? callback(...params) : currying(callback, ...params)
//         })(initialParams.concat(Array.prototype.slice.call(arguments)))
//     }
// }
