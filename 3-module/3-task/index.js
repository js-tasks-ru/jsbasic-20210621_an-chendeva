function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function camelize(str) {
  let arr = str.split('-');
    for (loopvar in arr)
  {
    if (loopvar > 0 ) {
      arr[loopvar] = ucFirst(arr[loopvar]);
    };
  }
  return arr.join('');
}