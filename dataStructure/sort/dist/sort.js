// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bubble = bubble;
exports.quickSort = quickSort;
function bubble(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    //check for already sort
    let update = 0;

    for (let i = 0; i < array.length - 1; i++) {

        //bubble the max value to bottom
        for (let j = 0; j < array.length - 1 - i; j++) {
            let temp;

            if (array[j] > array[j + 1]) {

                //exchange
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                update = 1;
            }
        }

        if (!update) {
            return array;
        }
    }

    return array;
}

function quickSortRecursive(array, start, end) {
    if (start >= end) {
        return;
    }

    let temp = array[start];
    let left = start,
        right = end;

    while (left !== right) {
        //right->mid
        while (left < right && array[right] > temp) {
            right--;
        }
        array[left] = array[right];

        //left->mid
        while (left < right && array[left] <= temp) {
            left++;
        }

        array[right] = array[left];
    }
    // mid = left = right
    array[left] = temp;

    quickSortRecursive(array, start, left - 1);
    quickSortRecursive(array, left + 1, end);

    return array;
}

function quickSort(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    return quickSortRecursive(array, 0, array.length - 1);
}

function run(array) {
    console.log(bubble(array));
    console.log(quickSort(array));
}
},{}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selection = selection;
exports.heap = heap;
function exchange(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function selection(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    // min
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        //exchange min value
        exchange(array, i, minIndex);
    }

    return array;
}

/*
 Complete Binary Tree
 --------------------------------------------------
             i (i=(1...n))        i (i=(0...n-1))
           /  \                 /  \
          /    \          =>   /    \
        2i     2i+1           2i+1  2i+2
 --------------------------------------------------
 */

function heap(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    //init a max heap
    let len = array.length;
    const lastNode = Math.floor(len / 2) - 1;

    for (let i = lastNode; i >= 0; i--) {
        maxHeap(array, i, len); //len - 1
    }

    //put max to bottom
    let maxIndex = len - 1;
    for (let j = maxIndex; j > 0; j--) {
        exchange(array, 0, j);
        maxHeap(array, 0, j);
    }

    return array;
}

/*
 start: the root of this node. left children and right children are all heap.
 end: checkout for child node exist, is leaf or not.
  */

function maxHeap(array, start, end) {
    let parent = start;
    let child = 2 * parent + 1;

    // is leaf
    if (child >= end) {
        return;
    }

    if (child + 1 < end && array[child] < array[child + 1]) {
        child++;
    }

    //exchange
    if (array[parent] < array[child]) {
        exchange(array, parent, child);
        maxHeap(array, child, end);
    }

    return array;
}

function run(array) {
    // console.log(selection(array));
    console.log(heap(array));
}

const a = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];
},{}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertion = insertion;
exports.shell = shell;
function insertionDraft(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 1; i < array.length; i++) {

        for (let j = 0; j < i; j++) {
            if (array[j] > array[i]) {
                // use splice
                array.splice(j, 0, array[i]); // insert new i
                array.splice(i + 1, 1); // remove primary i, now the array[i] will be max in the order area.

                // more common
                // const temp = array[i];
                // for(let k=i; k<j; k--) {
                //     array[k] = array[k-1];
                // }
                // array[j] = temp;

                break;
            }
        }
    }

    return array;
}

function insertion(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 1; i < array.length; i++) {
        //more common improved
        let temp = array[i];
        let j = i;
        for (; j > 0 && array[j - 1] > temp; j--) {
            array[j] = array[j - 1];
        }
        array[j] = temp;
    }

    return array;
}

function shell(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    const length = array.length;
    let gap = Math.floor(length / 2);

    while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j = i;
            for (; j > 0 && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    return array;
}

function run(array) {
    // console.log(insertionDraft(array));
    // console.log(insertion(array));
    console.log(shell(array));
}

const a = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];
},{}],10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeBottomToTop = mergeBottomToTop;
exports.mergeTopToBottom = mergeTopToBottom;
function mergeBottomToTop(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    const height = Math.ceil(Math.log2(array.length));

    for (let i = 0; i < height; i++) {
        let step = Math.pow(2, i);

        // two group for each
        for (let j = 0; j < array.length; j = j + 2 * step) {
            mergeToOne(array, j, step);
        }
    }

    return array;
}

function mergeToOne(array, start, range) {
    let start1 = start;
    const end1 = start + range - 1;

    let start2 = start1 + range;
    const end2 = end1 + range;

    let result = [];

    // when group2 do not exist
    if (!array[start2]) {
        return;
    }

    // group2 length may be less than group1, so here need check
    while (array[start2] && start1 <= end1 && start2 <= end2) {
        if (array[start1] < array[start2]) {
            result.push(array[start1++]);
        } else {
            result.push(array[start2++]);
        }
    }

    if (start1 <= end1) {
        result = result.concat(array.slice(start1, end1 + 1));
    }

    if (start2 <= end2) {
        result = result.concat(array.slice(start2, end2 + 1));
    }

    console.log(`result: ${result}`);
    [].splice.apply(array, [start, 2 * range].concat(result));
    console.log(`array: ${array.slice(0)}`);
}

// recursive: 1. f(n) -> f(n-1) 2. f1
function mergeRecursive(array, start, end) {
    // f1
    if (start >= end) {
        return;
    }

    const range = end - start + 1;
    let result = [];

    // fn -> fn-1
    const mid = Math.floor((start + end) / 2);
    let start1 = start;
    const end1 = mid;
    let start2 = mid + 1;
    const end2 = end;

    mergeRecursive(array, start1, end1);
    mergeRecursive(array, start2, end2);

    while (start1 <= end1 && start2 <= end2) {
        if (array[start1] < array[start2]) {
            result.push(array[start1++]);
        } else {
            result.push(array[start2++]);
        }
    }

    if (start1 <= end1) {
        result = result.concat(array.slice(start1, end1 + 1));
    }

    if (start2 <= end2) {
        result = result.concat(array.slice(start2, end2 + 1));
    }

    console.log(`result: ${result}`);
    [].splice.apply(array, [start, range].concat(result));
}

function mergeTopToBottom(array) {
    mergeRecursive(array, 0, array.length - 1);
    return array;
}

function run(array) {
    // console.log(mergeBottomToTop(array));
    console.log(mergeTopToBottom(array));
}

const a = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];
},{}],11:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.radix = radix;
function getMaxDigit(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        const len = array[i].toString().length;
        if (len > max) {
            max = len;
        }
    }

    return max;
}

function radix(array) {
    const maxDigit = getMaxDigit(array);
    let buckets;

    // min bit start (纵坐标)
    for (let i = 0; i < maxDigit; i++) {
        // 0..9 -> 10 buckets （横坐标）
        buckets = [];
        for (let i = 0; i < 10; i++) {
            buckets.push([]);
        }

        let radix = Math.pow(10, i);
        for (let j = 0; j < array.length; j++) {
            //取当前高位
            const sub = Math.floor(array[j] / radix);
            //取个位
            let digit = sub % 10;

            buckets[digit].push(array[j]);
        }

        array = [].concat.apply([], buckets);
    }

    return array;
}

function run(array) {
    console.log(radix(array));
}

const a = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];
},{}],6:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
'use strict';

var _exchange = require('./src/exchange');

var _selection = require('./src/selection');

var _insertion = require('./src/insertion');

var _merge = require('./src/merge');

var _distribution = require('./src/distribution');

require('./sort.css');

const testData = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];

function init() {
    const sorts = [_exchange.bubble, _exchange.quickSort, _selection.selection, _selection.heap, _insertion.insertion, _insertion.shell, _merge.mergeBottomToTop, _merge.mergeTopToBottom, _distribution.radix];

    sorts.forEach(function (item) {
        document.getElementById(item.name).addEventListener('click', function () {
            let result = document.getElementById('input').value;
            result = result.split(',').map(function (item) {
                return parseFloat(item);
            });

            document.getElementById('result').textContent = item(result);
        });
    });

    document.getElementById('auto').addEventListener('click', function () {
        document.getElementById('input').value = testData;
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('result').textContent = null;
    });
}

init();
},{"./src/exchange":8,"./src/selection":7,"./src/insertion":9,"./src/merge":10,"./src/distribution":11,"./sort.css":6}]},{},[4])