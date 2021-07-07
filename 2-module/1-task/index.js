let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  sum = 0;
  for (salary in salaries)
  {
    if (parseInt(salaries[salary])) {
      sum = (sum + salaries[salary]);
    }
  }
  return sum;
}

sumSalary(salaries);