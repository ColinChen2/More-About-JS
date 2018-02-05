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
})({3:[function(require,module,exports) {
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
},{}],4:[function(require,module,exports) {
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
},{}],2:[function(require,module,exports) {
'use strict';

var _exchange = require('./src/exchange');

var _selection = require('./src/selection');

// import {insertion, shell} from 'src/insertion';
// import {mergeBottomToTop, mergeTopToBottom} from 'src/merge';
// import {radix} from 'src/distribution';

function init() {
    const sorts = ['bubble', 'quickSort', 'selection', 'heap'];

    sorts.forEach(function (item, index) {
        document.getElementById(item).addEventListener('click', function () {
            const value = document.getElementById('input');
            const result = window[item](value);

            document.getElementById('result').textContent = result;
        });
    });
}

init();
},{"./src/exchange":3,"./src/selection":4}],5:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '53730' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[5,2])
//# sourceMappingURL=/dist/91ba0003ec1b873fe6ca1e035988eb95.map