## 交换排序

思路：通过两两交换来将序列中的最小值上浮，或者让最大值下沉。

### 冒泡排序

```javascript
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
```

### 快速排序

#### 实现算法：
1. 选出初始中间值。
2. 左右两边互相交换来达到，左边区域的值都小于中间值，右边区域的值都大于中间值。
3. 递归地重复1，2步骤直至左右区域取完。

```javascript
function quickSortRecursive(array, start, end) {
    if (start >= end) {
        return;
    }

    let temp = array[start];
    let left = start, right = end;

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
```

## 源代码
[sort-exchange](../src/exchange.js)