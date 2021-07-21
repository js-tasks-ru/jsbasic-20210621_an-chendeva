function makeDiagonalRed(table) {
    for (let loopvar = 0; loopvar < table.rows.length; loopvar++)
    {
    table.rows[loopvar].cells[loopvar].style.backgroundColor = "red"
    }
}