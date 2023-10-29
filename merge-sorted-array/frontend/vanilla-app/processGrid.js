function getInputArrayData () {
    const n = Number(document.getElementById("nCount").value);
    const m = Number(document.getElementById("mCount").value);
    let array1 = [], x = 0;
    let array2 = [], y = 0;
    const extractedGridData = Array.from(document.querySelectorAll("#input-array .array-cell"))
        .map(node => Number(node.value))
    
    for (let i = 0; i < n; i++) {
        array1[i] = [];
        array1[i].push(extractedGridData[x++]);
    }
    for (let j = 0; j < m; j++) {
        array2[j] = [];
        array2[j].push(extractedGridData[y++]);
    }
    return {array1, array2};
}

function setOutputArrayData (outputArray) {
    let flattenedOutpurMatrix = outputArray.flat(1);
    Array.from(document.querySelectorAll("#output-array .array-cell"))
        .forEach((node, index) => node.value = Number(flattenedOutpurMatrix[index]));
}

function merge(array1, array2, n, m) {
    let left = n - 1;
    let right = 0;

    while (left >= 0 && right < m) {
        if (array1[left] > array2[right]) {
            [array1[left], array2[right]] = [array2[right], array1[left]];
            left--, right++;
        }
        else {
            break;
        }
    }

    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    
}

function processMergeSortedArray () {
    const array1 = getInputArrayData();
    const array2 = getInputArrayData();
    outputArray = merge(array1, array2, n, m);
    setOutputArrayData(outputArray);
}
