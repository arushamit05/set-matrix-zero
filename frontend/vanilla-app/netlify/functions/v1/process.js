exports.handler = async function (event, context) {
  const inputMatrix = event.body.inputMatrix;
  const outputMatrix = setZeroes(inputMatrix);
  return {
    statusCode: 200,
    body: JSON.stringify({ outputMatrix }),
  };
};

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