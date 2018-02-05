function exchange(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

export function selection(array) {
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

export function heap(array) {
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

function run(array) {
    // console.log(selection(array));
    console.log(heap(array));
}

const a = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];