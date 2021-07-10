let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let num = [] ;
  for (loopvar in arr)
  {
    if (arr[loopvar] >= a && arr[loopvar] <= b) {
      num.push(arr[loopvar])
    };
  }
  return num;
}

let filtered = filterRange(arr, 1, 4);