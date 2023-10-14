
document.addEventListener('DOMContentLoaded', function() {
  const nInput = document.getElementById("nCount");
  const mInput = document.getElementById("mCount");
  nInput.addEventListener("change", updateArrays);
  mInput.addEventListener("change", updateArrays);
  updateArrays();
}, false);

function updateArrays() {
  const n = Number(document.getElementById('nCount').value);
  const m = Number(document.getElementById('mCount').value);
  createArray('input-array-n', n);
  createArray('input-array-m', m);
  createArray('output-array', m + n, true);
}

function createArray(arrayId, size, isDisabled = false){
  const arrayContainer = document.getElementById(arrayId);
  arrayContainer.innerHTML = "";
  for (let i = 0; i < size; i++){
    const cell = document.createElement('input');
    cell.className = "array";
    cell.disabled = isDisabled;
    cell.value = '1';
    arrayContainer.appendChild(cell);
  }
}
