function checkSpam(text) {
  let regExp = /(1[xX][bB][eE][tT]|[xX]{3})/;
    return regExp.test(text);
}
