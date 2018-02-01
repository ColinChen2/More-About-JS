function merge(array) {
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
    let start2 = start + range;

    const end1 = start + range -1;
    const end2 = end1 + range;
    let result = [];

    // odd number
    if (!array[start2]) {
        return;
    }

    while (array[start2] && start1 <= end1 && start2 <= end2) {
        if (array[start1] < array[start2]) {
            console.log(array[start1]);
            result.push(array[start1++]);
        } else {
            console.log(array[start2]);
            result.push(array[start2++]);
        }
    }

    if (start1 <= end1) {
        result = result.concat(array.slice(start1, end1 + 1))
    }

    if (start2 <= end2) {
        result = result.concat(array.slice(start2, end2 + 1))
    }

    console.log(`result: ${result}`);
    [].splice.apply(array, [start, 2 * range].concat(result));
    console.log(`array: ${array.slice(0)}`);
}

function run(array) {
    console.log(merge(array));
}

const a = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];