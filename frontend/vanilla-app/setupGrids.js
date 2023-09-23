document.addEventListener('DOMContentLoaded', function() {
    const rowInput = document.getElementById("rowCount");
    const colInput = document.getElementById("colCount");
    rowInput.addEventListener("change", updateGrid);
    colInput.addEventListener("change", updateGrid); 
    updateGrid();
}, false);

function updateGrid() {
  createGrid('input-matrix', 'input')
  createGrid('output-matrix')
}

function createGrid(gridId, cellType = 'input') {
  const matrixGrid = document.getElementById(gridId);
  matrixGrid.innerHTML = "";
  const rowCount = Number(document.getElementById("rowCount").value);
  const colCount = Number(document.getElementById("colCount").value);
  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    row.className = "matrix-row";
    for (let j = 0; j < colCount; j++) {
      const cell = document.createElement(cellType);
      cell.className = "matrix-cell";
      if (gridId === 'output-matrix')  cell.disabled = true;
      cell.value = '1';
      cell.addEventListener("change", processSetMatrixZero);
      row.appendChild(cell);
    }
    matrixGrid.appendChild(row);
  }
}
