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

function run(array) {
    console.log(bubble(array));
    console.log(quickSort(array));
}