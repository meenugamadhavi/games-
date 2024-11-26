const EMPTY = "┃        ┃";
const MIDDLE_DOT = "┃   ⚪️   ┃"
const LEFT_DOT = "┃⚪️      ┃"
const RIGHT_DOT = "┃      ⚪️┃"
const TWO_DOTS = "┃⚪️    ⚪️┃"

function repeat(number) {
  if (number <= 1) {
    return "";
  }

  return "━" + repeat(number - 1);
}

function addTopBorder() {
  return "┏" + repeat(9) + "┓";
}

function addBottomBorder() {
  return "┗" + repeat(9) + "┛";
}

function random() {
  return Math.ceil(Math.random() * 5);
}

function addBorders(string1, string2, string3) {
  return addTopBorder() + "\n" + string1 + "\n" + string2 + "\n" +
    string3 + "\n" + addBottomBorder();
}

function rollDice(faceValue) {
  switch(faceValue) {
    case 1 : return addBorders(EMPTY, MIDDLE_DOT, EMPTY);
    case 2 : return addBorders(EMPTY, TWO_DOTS, EMPTY);
    case 3 : return addBorders(RIGHT_DOT, MIDDLE_DOT, LEFT_DOT);
    case 4 : return addBorders(TWO_DOTS, EMPTY, TWO_DOTS);
    case 5 : return addBorders(TWO_DOTS, MIDDLE_DOT, TWO_DOTS);
    case 6 : return addBorders(TWO_DOTS, TWO_DOTS, TWO_DOTS);
  }
}

function delay() {
  for (let i = 0; i <= 90000000; i++) {

  }
}
function blinkDice(index) {
  if (index === 4) {
    return ""
  }

  for (let i = 1; i < 7; i++) {
    console.clear();
    console.log(rollDice(i));
    delay();
  }
  return blinkDice(index + 1);
}

blinkDice(1);
console.clear();
const faceValue = random();
console.log(rollDice(faceValue));
console.log("your value is", faceValue);