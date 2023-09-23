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

function setZeroes (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let rowZeroIndx = [];
    let colZeroIndx = [];
    
    const map = {};
    
    const getAllIndicesOfZero = (row) => {
      return  row.map((e, i) => e === 0 ? i : '').filter(String)
    }
    for(let i=0;i<m;i++){
           map[i] = matrix[i];
    }
   
    for(let key in map){
        if(map[key].includes(0)){
            rowZeroIndx.push(+key);
            colZeroIndx.push(...getAllIndicesOfZero(map[key]));
        }
    }
    for(let i of rowZeroIndx){
        for(let k=0;k<n;k++){
            matrix[i][k] = 0;
        }
    }
    for(let i of colZeroIndx){
        for(let k=0;k<m;k++){
            matrix[k][i] = 0;
        }
    }
    return matrix;
}

async function processSetMatrixZero () {
    const matrix = getInputGridData();
    const res = await makeProcessCall(matrix);
    outputMatrix = res?.outputMatrix;
    setOutputGridData(outputMatrix);
}

async function makeProcessCall(input) {
    const rawResponse = await fetch('/.netlify/functions/v1/process', {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputMatrix: input })
    });
    const content = await rawResponse.json();
    return content;
}