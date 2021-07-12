function showSalary(users, age) {
  let arr = [];
  for (loopvar in users)
  {
  if (users[loopvar]["age"] <= age) {
    arr.push(users[loopvar]["name"] + ", " + users[loopvar]["balance"]);
  };
}
return arr.join('\n');
}