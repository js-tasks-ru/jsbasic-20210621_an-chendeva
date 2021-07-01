/**
 * Эту функцию трогать не нужно
 */
 function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
 function isValid(name) {
  let regName = /^[А-Яа-яA-Za-z]{4,}$/;
  if (name == null) {
  return false;
  }
  else if (regName.test(name)){
    return true;
  } else {
    return false;
  }
}

/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();