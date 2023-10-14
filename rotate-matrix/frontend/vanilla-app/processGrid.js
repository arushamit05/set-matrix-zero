function getInputGridData () {
    const rows = Number(document.getElementById("rowCount").value);
    const cols = Number(document.getElementById("colCount").value);
    let matrix = [], x = 0;
    const extractedGridData = Array.from(document.querySelectorAll("#input-matrix .matrix-cell"))
        .map(node => Number(node.value))
    
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i].push(extractedGridData[x++]);
        }
    }
    return matrix;
}

function setOutputGridData (outputMatrix) {
    let flattenedOutpurMatrix = outputMatrix.flat(1);
    Array.from(document.querySelectorAll("#output-matrix .matrix-cell"))
        .forEach((node, index) => node.value = Number(flattenedOutpurMatrix[index]));
}

function rotate(matrix) {
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}


function processRotateMatrix () {
    const matrix = getInputGridData();
    outputMatrix = rotate(matrix);
    setOutputGridData(outputMatrix);
}