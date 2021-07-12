const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73'; 

function getMinMax(str) {
  let arr = [];
  let strarr = str.split(/,| /);
    for (loopvar in strarr)
    {
    if (parseInt(strarr[loopvar])) {
        arr.push(strarr[loopvar] * 1);
    };
  }
  arr = arr.sort((a, b) => a - b);
  arr[0];
  arr[arr.length - 1];

  return {min: arr[0], max: arr[arr.length - 1]}
}

getMinMax(inputData)