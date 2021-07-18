function makeFriendsList(friends) {
  let domelem = document.createElement('ul');
  domelem.innerHTML = friends.map(item => "<li>" + item.firstName + " " + item.lastName + "</li>").join('\n');
  
  return domelem;
}