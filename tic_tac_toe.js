let player1 = "";
let player2 = "";

function greetingsMessage() {
  console.log("    -----*💥Welcome to 🍄🕴🌜 🍄🅰🌜 🍄😀𝓔 Game💥*-----\n");
  let rules = "This game includes numbers from 1 to 9\n";
  rules += "You shouldn't enter numbers other than 1 to 9 or characters\n"
  rules += "the one who make their symbols in a row or columns or diagonal\n";
  rules += "they are the winners of the game\n";

  console.log(rules);
}

function winMessage(player) {
  console.log(player + " 👏👏👏 Won The Game 🏆");
  return true;
}

function displayBoard(board) {
  console.log(board);
}

function getSymbol(times) {
  return times % 2 === 0 ? "❌" : "⭕️";
}

function repeat(number, stringToRepeat) {
  if (number === 1) {
    return "";
  }

  return stringToRepeat + repeat(number - 1, stringToRepeat);
}

function getNumberBox(index, box) {
  if (index >= 10) {
    return repeat(13, "⎯") + "\n" + box;
  }
  box += "⎜ " + index + " ";

  if (index % 3 === 0) {
    box += "⎜\n" + repeat(13, "⎯") + "\n";
  }

  return getNumberBox(index + 1, box);
}

function choiceBoard(index, input, box, newBox, symbol) {
  if (index === box.length) {
    return newBox;
  }

  if (box[index] === input) {
    newBox += symbol;
    index = index + 2;
  }
  newBox += box[index];

  return choiceBoard(index + 1, input, box, newBox, symbol);
}

function isSubSetOf(string, userString, strIndex, userStrIndex, count) {
  if (strIndex > string.length) {
    return count;
  }

  if (userStrIndex >= userString.length) {
    userStrIndex = 0;
    strIndex = strIndex + 1;
  }

  const isCharacterMatching = userString[userStrIndex] === string[strIndex];
  const newCount = isCharacterMatching ? count + 1 : count;

  return isSubSetOf(string, userString, strIndex, userStrIndex + 1, newCount);
}

function isPlayerWon(set) {
  switch (3) {
    case isSubSetOf("123", set, 0, 0, 0): return true;
    case isSubSetOf("456", set, 0, 0, 0): return true;
    case isSubSetOf("789", set, 0, 0, 0): return true;
    case isSubSetOf("147", set, 0, 0, 0): return true;
    case isSubSetOf("258", set, 0, 0, 0): return true;
    case isSubSetOf("369", set, 0, 0, 0): return true;
    case isSubSetOf("159", set, 0, 0, 0): return true;
    case isSubSetOf("357", set, 0, 0, 0): return true;
  }

  return false;
}

function determineWinner(symbol, input) {
  if (symbol === "⭕️") {
    player1 += input;
  }

  if (symbol === "❌") {
    player2 += input;
  }

  switch (true) {
    case isPlayerWon(player1): return winMessage("firstPlayer");
    case isPlayerWon(player2): return winMessage("secondPlayer");
  }

  return false;
}


function validateInput(input) {
  if (+input + "" === "NaN" || input === "") {
    console.log("❌ Enter valid number");
    return readInput();
  }

  if (+input === 0 || +input > 9) {
    console.log("❌ enter number greater than 0 and less than 10");
    return readInput();
  }

  if (isSubSetOf(player1 + player2, input, 0, 0, 0)) {
    console.log("❌ " + input, "Is already entered");
    return readInput();
  }

  return input;
}

function readInput() {
  const input = prompt("Enter cell number");

  return validateInput(input)
}

function startGame(number, board, isWinnerFound) {
  if (number === 0 && !isWinnerFound) {
    return "🤝 The Game Is Draw";
  }

  if (isWinnerFound) {
    return ""
  }

  const playerInput = readInput();
  const symbol = getSymbol(number);
  const newBoard = choiceBoard(0, playerInput, board, "", symbol);
  console.clear();
  displayBoard(newBoard);
  isWinnerFound = determineWinner(symbol, playerInput);

  return startGame(number - 1, newBoard, isWinnerFound);
}

function ticTacToe() {
  greetingsMessage();
  let numbersBox = getNumberBox(1, "");
  displayBoard(numbersBox);
  console.log(startGame(9, numbersBox, false));
}

ticTacToe();
