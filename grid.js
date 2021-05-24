let leftCol = document.querySelector(".left_col");
let topRow = document.querySelector(".top_row");
let grid = document.querySelector(".grid");
let rows = 100;
let cols = 26;
//left row
for (let i = 0; i < rows; i++)
{
    let colBox = document.createElement("div");
    colBox.innerText = i + 1;
    colBox.setAttribute("class", "box");
    leftCol.appendChild(colBox);
}
for (let i = 0; i < cols; i++)
{
    let cell = document.createElement("div");
    cell.innerText = String.fromCharCode(65 + i);
    cell.setAttribute("class", "cell");
    topRow.appendChild(cell);
}