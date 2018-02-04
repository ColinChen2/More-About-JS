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

    return array
}

function run(array) {
    console.log(radix(array));
}

const a = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];