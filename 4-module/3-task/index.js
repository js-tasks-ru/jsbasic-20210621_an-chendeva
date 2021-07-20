function highlight(table) {
  for (let loopvar = 1; loopvar < table.rows.length; loopvar++)
    {
    let dataavailable = table.rows[loopvar].cells[3].getAttribute("data-available");
    if (dataavailable == "true") {
      table.rows[loopvar].classList.add('available')
    }
    else if (dataavailable == "false") {
      table.rows[loopvar].classList.add('unavailable')
    }
    else if (dataavailable == null) {
      table.rows[loopvar].setAttribute('hidden', '')
    }
    let gender = table.rows[loopvar].cells[2].innerText;
    if (gender == "m") {
      table.rows[loopvar].classList.add('male')
    }
    else if (gender == "f") {
      table.rows[loopvar].classList.add('female')
    }

    if (parseInt(table.rows[loopvar].cells[1].innerText) < 18) {
      table.rows[loopvar].style.textDecoration = "line-through"

    }
  }
}





