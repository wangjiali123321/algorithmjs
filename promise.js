const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class AjPromise {
  constructor(fn) {
    this.state = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = value => {
        // console.log(value)
      if (value instanceof Promise) {
        console.log(value)
        return value.then(resolve, reject);
      }
      // console.log(1)
      setTimeout(() => {
        console.log(this.state)
        if (this.state === PENDING) {
          this.state = FULFILLED;
          this.value = value;
          this.onFulfilledCallbacks.map(cb => {
            cb = cb(this.value);
          });
        }
      });
    };
    const reject = reason => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = REJECTED;
          this.reason = reason;
          this.onRejectedCallbacks.map(cb => {
            cb = cb(this.reason);
          });
        }
      });
    };
    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    console.log('then')
    let newPromise;

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : reason => {
            throw reason;
          };
    if (this.state === FULFILLED) {
        console.log(this.state)
      return (newPromise = new AjPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            console.log('x',x)
            resolvePromise(newPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }));
    }
    if (this.state === REJECTED) {
        console.log(this.state)
      return (newPromise = new AjPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(newPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }));
    }
    if (this.state === PENDING) {
        console.log(this.state)
      return (newPromise = new AjPromise((resolve, reject) => {
        this.onFulfilledCallbacks.push(value => {
          try {
            console.log(3)
            let x = onFulfilled(value);//看then里的函数有没有返回值
            console.log(4)
            resolvePromise(newPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        this.onRejectedCallbacks.push(reason => {
          try {
            let x = onRejected(reason);
            resolvePromise(newPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }));
    }
  }
  catch(onRejected) {
    console.log('catch')
    return this.then(null, onRejected);
  }
}
function resolvePromise(promise2, x, resolve, reject) {
    console.log('x',x)
  if (x === promise2) {
    reject(new TypeError('循环引用'));
  }
  if (x instanceof AjPromise) {
        if (x.state === PENDING) {
          x.then(
            y => {
              resolvePromise(promise2, y, resolve, reject);
            },
            reason => {
              reject(reason);
            }
          );
        } else {//resolve,reject
          x.then(resolve, reject);
        }
  } else if (x && (typeof x === 'function' || typeof x === 'object')) {
        let called = false;
        try {
          let then = x.then;
          if (typeof then === 'function') {
            then.call(
              x,
              y => {
                if (called) return;
                called = true;
                resolvePromise(promise2, y, resolve, reject);
              },
              r => {
                if (called) return;
                called = true;
                reject(r);
              }
            );
          } else {
            resolve(x);
          }
        } catch (e) {
          if (called) return;
          called = true;
          reject(e);
        }
  } else {
        resolve(x);
  }
}

AjPromise.all = function(promises) {
  return new AjPromise((resolve, reject) => {
    let done = gen(promises.length, resolve);
    promises.forEach((promise, index) => {
      promise.then(value => {
        done(index, value);
      }, reject);
    });
  });
};

function gen(length, resolve) {
  let count = 0;
  let values = [];
  return function(i, value) {
    values[i] = value;
    if (++count === length) {
      resolve(values);
    }
  };
}

AjPromise.race = function(promises) {
  return new AjPromise((resolve, reject) => {
    for (var i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
};
AjPromise.resolve = function(value) {
  return new AjPromise((resolve, reject) => resolve(value));
};
AjPromise.reject = function(reason) {
  return new AjPromise((resolve, reject) => reject(reason));
};

AjPromise.deferred = function() {
  let defer = {};
  defer.promise = new AjPromise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
};

const getbusline = () => {
    // console.log(1)
    return new AjPromise((resolve,reject)=>{
        // console.log(2)
        resolve(1);
    })
}

// getbusline().then(e=>{
//     console.log('e',e)
// })

// Promise.resolve(
//   { 
//     then: (resolve) => { 
//       console.log('Hello from then');
//       resolve(42);
//     }
//   }
// ).then(value => console.log(`Resolution with: ${value}`));
///////////////////////////////////////

// const getbusline_p = () => {
//     // console.log(1)
//     return new Promise((resolve,reject)=>{
//         // console.log(2)
//         resolve(1);
//     }).catch(e=>{
//         reject()
//     });
// }

// getbusline_p().then(e=>{
//     console.log(e)
// }).then(e=>{
//     console.log(e)
// })



// 基本promise
// 未添加异步处理等其他边界情况
// ①自动执行函数，②三个状态，③then
// class Promise {
//   constructor (fn) {
//     // 三个状态
//     this.state = 'pending'
//     this.value = undefined
//     this.reason = undefined
//     let resolve = value => {
//       if (this.state === 'pending') {
//         this.state = 'fulfilled'
//         this.value = value
//       }
//     }
//     let reject = value => {
//       if (this.state === 'pending') {
//         this.state = 'rejected'
//         this.reason = value
//       }
//     }
//     // 自动执行函数
//     try {
//       fn(resolve, reject)
//     } catch (e) {
//       reject(e)
//     }
//   }
//   // then
//   then(onFulfilled, onRejected) {
//     switch (this.state) {
//       case 'fulfilled':
//         onFulfilled()
//         break
//       case 'rejected':
//         onRejected()
//         break
//       default:
//     }
//   }
// }

function allSettled(promises) {
 
  return new Promise((resolve, reject) => {
    const result = []
    
    promises.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = {
          status: 'fulfilled',
          value
        }
      }, (reason) => {
        result[index] = {
          status: 'rejected',
          reason
        }
      })
    })
  })
}