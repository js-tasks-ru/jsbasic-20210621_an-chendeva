function getMinMax(str) {
  let arr = str.split(/,| /).filter(item => parseInt(item)).map(item => item * 1).sort((a, b) => a - b);
  return {min: arr[0], max: arr[arr.length - 1]};
}