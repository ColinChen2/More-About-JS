import {bubble, quickSort} from './src/exchange';
import {selection, heap} from './src/selection';
import {insertion, shell} from './src/insertion';
import {mergeBottomToTop, mergeTopToBottom} from './src/merge';
import {radix} from './src/distribution';

import './sort.css';

const testData = [2, 3, 9, 78, 785, 545, 3, 3, 78, 5, 45];

function init() {
    const sorts = [
        bubble, quickSort,
        selection, heap,
        insertion, shell,
        mergeBottomToTop, mergeTopToBottom,
        radix
    ];

    sorts.forEach(function (item) {
        document.getElementById(item.name).addEventListener('click', function () {
            let result = document.getElementById('input').value;
            result = result.split(',').map(function(item) {
                return parseFloat(item);
            });

            document.getElementById('result').textContent = item(result);
        });
    });

    document.getElementById('auto').addEventListener('click', function () {
        document.getElementById('input').value = testData;
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('result').textContent = null;
    });
}

init();