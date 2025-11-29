const rows = 25;
const columns = 24;
const screenCreation = function (rows, columns) {
  const frame = Array(rows).fill(1);
  return frame.map(() => " ".repeat(columns).split(""));
};

const screen = screenCreation(rows, columns);

function drawScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = " ";
    }
  }
}
console.log(drawScreen(screen));

function addText(abscissa, ordinate, text, screen) {
  screen[abscissa][ordinate] = text;
}

function drawOnScreen(abscissa, ordinate, text, screen) {
  addText(abscissa, ordinate, text, screen);
}

let b = 0;
let d = columns;
setInterval(() => {
  drawScreen(screen);
  console.clear();
  drawOnScreen(0, b++, "Hi", screen);
  drawOnScreen(4, d--, "Nandu", screen);
  if (b === 24) b = 0;
  if (d === 0) d = columns;
  console.log(screen.map((row) => row.join("")).join("\n"));
}, 500);
