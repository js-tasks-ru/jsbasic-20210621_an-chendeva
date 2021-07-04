function factorial(num) {
  let result = 1
  while (num >= 0) {
   if ((num) == 0 || (num) == 1) {
      break;
   } else {
      result = result * num;
      num = num - 1;
   }
  }
  return result;
 }
 factorial(5)