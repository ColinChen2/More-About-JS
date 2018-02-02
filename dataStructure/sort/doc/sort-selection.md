## 选择排序

思路：将数据分为两个区域：有序区，无序区。每一次,通过比较选出无序区的最小值（最大值）放到有序区，直到将有序区的放满。

### 简单选择排序
```JavaScript
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
```

### 堆排序

#### 前提知识：
1. 完全二叉树
2. 堆：一种数据结构,也叫二叉堆，分为大根堆和小根堆。
3. 大根堆：最大值在堆根，父节点总是大于或等于子节点

#### 实现算法：
1. 创建初始最大堆。
2. 选出最大值到有序区。
3. 不断调整堆，直到有序区满为止。

```JavaScript
function heap(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    //init a max heap
    let len = array.length;
    const lastNode = Math.floor(len / 2) - 1;

    for (let i = lastNode; i >= 0; i--) {
        maxHeap(array, i, len);//len - 1
    }

    //put max to bottom
    let maxIndex = len-1;
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
        return ;
    }

    if (child + 1 < end && array[child] < array[child + 1]) {
        child++;
    }

    //exchange
    if(array[parent] < array[child]) {
        exchange(array, parent, child);
        maxHeap(array, child, end);
    }

    return array;
}
```

## 源代码
[sort-selection](../src/selection.js)