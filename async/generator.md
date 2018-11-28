## Generator

### 协程
协程,意思是多个线程互相协作，完成异步任务。
协程有点像函数，又有点像线程。它的运行流程大致如下。

第一步，协程A开始执行。
第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
第三步，（一段时间后）协程B交还执行权。
第四步，协程A恢复执行。
上面流程的协程A，就是异步任务，因为它分成两段（或多段）执行。

### 例子
```JavaScript
function* add(x) {
  var y = yield x + 1;
  return y;
}

var a = add(1);

a.next();
a.next(3);
```

### 特性
1. 执行状态的变化，执行->暂停->执行
2. 函数内外数据交换和错误处理

### 遍历器
调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，遍历器对象。

#### 遍历
1. 什么类型的数据可以遍历？
2. 不同的数据结构可以统一的遍历？
3. JS中for...of是如何去遍历的？

#### 迭代器协议
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols

#### 自定义可遍历对象
```JavaScript
var obj = {
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

obj.data = [0, 1, 2 ];

for(var i of obj) {
console.log(i);
}

```


### 执行

#### Thunk 和 传名调用
```javascript
function f(m) {
  return m * 2;
}

f(x + 5);

// 等同于

var thunk = function () {
  return x + 5;
};

function f(thunk) {
  return thunk() * 2;
}
```

#### Thunk In JS
```javascript
const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};

function f(a, cb) {
  cb(a);
}

const ft = Thunk(f);
ft(1)(console.log)
```

#### Generator的自动执行

#### 初步想法
```javascript
function* gen() {
  // ...
}

var g = gen();
var res = g.next();

while(!res.done){
  console.log(res.value);
  res = g.next();
}
```
但是很快，你就会发现一个问题，执行的是异步操作怎么办？这时候，thunk就出来了
```javascript
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

function* g() {
  // ...
}

run(g);
```

为什么result.value 是的函数呢，上面我们已经提到了。为了解决异步，我们让yeild 后面的语句也都包装成函数。

