## 分布排序

### 基数排序
到目前为止，我们都是在使用比较型的算法。总是将元素比较大小，然后再做进一步操作。

而基数排序则与众不同，它是将整数按位数切割成不同的数字，然后按各个位数进行比较。当然他的元素不仅仅只是是整数，任何有特定格式的浮点数，字符串都可以。

排序方式分为两种：
1. LSD（Least significant digital），由键值的最右边开始。
2. MSD（Most significant digital），由键值的最左边开始。

这里的例子是使用LSD。

```JavaScript
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

    // min bit start
    for (let i = 0; i < maxDigit; i++) {
        // 0..9 -> 10 buckets
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

    return array
}
```

## 源代码
[sort-radix](../src/distribution.js)