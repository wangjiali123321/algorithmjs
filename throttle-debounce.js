// import { throttle, debounce } from 'throttle-debounce';

function foo() { console.log('foo..'); }
function bar() { console.log('bar..'); }

const fooWrapper = throttle(200, foo);

for (let i = 1; i < 10; i++) {
  setTimeout(fooWrapper, i * 30);
}

// => foo 执行了三次
// => foo..
// => foo..
// => foo..

// const barWrapper = debounce(200, bar);

// for (let i = 1; i < 10; i++) {
//   setTimeout(barWrapper, i * 30);
// }

// => bar 执行了一次 
// => bar..

////：如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。
function throttle(delay, callback) {   //节流
  let timeoutID;
  let lastExec = 0;

  function wrapper() {
    const self = this;
    const elapsed = Number(new Date()) - lastExec;
    const args = arguments;

    function exec() {
      lastExec = Number(new Date());
      callback.apply(self, args);
    }

    clearTimeout(timeoutID);
    console.log('elapsed',elapsed,'delay',delay)
    if (elapsed > delay) {
      exec();
    } else {
      timeoutID = setTimeout(exec, delay - elapsed);
    }
  }

  return wrapper;
}
//// 基于上述场景，首先提出第一种思路：在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms，然后：

// 如果在200ms内没有再次触发滚动事件，那么就执行函数
// 如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时
function debounce(delay, callback) {//防抖  
  let timeoutID;

  function wrapper() {
    const self = this;
    const args = arguments;

    function exec() {
      callback.apply(self, args);
    }

    clearTimeout(timeoutID);

    timeoutID = setTimeout(exec, delay);
  }

  return wrapper;
}
