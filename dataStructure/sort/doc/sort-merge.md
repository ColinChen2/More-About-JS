## 归并排序
思路：分而治之, 先将序列分成若干组，然后不断合并。

核心：将两个已经排好序的序列合并成一个序列的操作。

### 实现算法：

#### 迭代法
自底向上进行归并。

    1. 根据元素的个数推算出树的高度，确定迭代的次数，然后从底部开始。
    2. 设定连个指针，最初位置都是在两个已经排好序序列的起始位置
    3. 比较两个指针所指向的元素，选择相对小的元素放入合并空间，并后移一步该指针。
    4. 重复步骤3，直到其中一个序列到达列尾。
    5. 将另一序列剩下的所有元素直接复制到和并空间。

#### 递归法
自顶向下。

    1. 将序列一分为二，直到分成的两个（-个）是有序的列。
    2. 将两个已经排好序的序列合并成一个序列。
    3. 重复步骤2，直到所有元素排序完毕，即序列数为1.

### 代码实现
#### 迭代法
```JavaScript
function mergeBottomToTop(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    const height = Math.ceil(Math.log2(array.length));

    for (let i = 0; i < height; i++) {
        let step = Math.pow(2, i);

        // two group for each
        for (let j = 0; j < array.length; j = j + 2 * step) {
            mergeToOne(array, j, step)
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
        result = result.concat(array.slice(start1, end1 + 1))
    }

    if (start2 <= end2) {
        result = result.concat(array.slice(start2, end2 + 1))
    }

    [].splice.apply(array, [start, 2 * range].concat(result));
}
```

#### 递归法
```JavaScript
function mergeRecursive(array, start, end) {
    if (start >= end) {
        return;
    }

    const range = end - start + 1;
    let result = [];

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
        result = result.concat(array.slice(start1, end1 + 1))
    }

    if (start2 <= end2) {
        result = result.concat(array.slice(start2, end2 + 1))
    }

    [].splice.apply(array, [start, range].concat(result));
}

function mergeTopToBottom(array) {
    mergeRecursive(array, 0, array.length - 1);
    return array;
}
```

## 源代码
[sort-merge](../src/merge.js)