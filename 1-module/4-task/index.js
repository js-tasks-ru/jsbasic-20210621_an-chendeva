function checkSpam(text) {
  let regExp = /(1[xX][bB][eE][tT]|[xX]{3})/;
    if ( regExp.test(text)) {
      return true;
    } else {
      return false;
    }
}
