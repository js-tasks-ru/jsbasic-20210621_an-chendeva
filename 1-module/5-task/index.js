function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let end = maxlength - 1
    return str.slice(0,end) + "…"
    } else {
    return str
    }
}