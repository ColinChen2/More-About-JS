function insertionDraft(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 1; i < array.length; i++) {

        for (let j = 0; j < i; j++) {
            if (array[j] > array[i]) {
                // use splice
                array.splice(j, 0, array[i]);// insert new i
                array.splice(i + 1, 1);// remove primary i, now the array[i] will be max in the order area.

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

export function insertion(array) {
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

export function shell(array) {
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