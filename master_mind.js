const maxAttemps = 10;

function greetingsMessage() {
  console.log(" ------*🌺WELCOME TO 🄼 🄰 🅂 🅃 🄴 🅁  🄼 🄸 🄽 🄳 🅂  GAME🌺-----");
  let rules = "➡️ In this game you need guess the position of numbers\n";
  rules += "➡️ You should enter the 4 numbers by giving spaces\n"
  rules += "➡️ The numbers are from 1 to 9\n";
  console.log(rules);
}

function getRandomNumber(number) {
  const partition = number === 1 ? "" : " ";
  if (number === 0) {
    return "";
  }
  const random = Math.ceil(Math.random() * 9);

  return random + partition + getRandomNumber(number - 1)
}

function areDigitsSame(sequence, index, nextIndex) {
  if (index >= sequence.length) {
    return sequence;
  }

  if (sequence[index] === sequence[nextIndex]) {
    sequence = getRandomNumber(4);
    return areDigitsSame(sequence, 0, 2);
  }

  if (nextIndex >= sequence.length - 1) {
    return areDigitsSame(sequence, index + 2, index + 4);
  }

  return areDigitsSame(sequence, index, nextIndex + 2);
}

function hints(randomSequence, userSequence, RSI, USI, string) {
  if (RSI > randomSequence.length) {
    return string;
  }

  if (USI >= userSequence.length) {
    USI = 0;
    RSI = RSI + 2;
  }

  if (userSequence[USI] === randomSequence[RSI] && USI === RSI) {
    string = string + "🟢";
    return hints(randomSequence, userSequence, RSI, USI + 2, string);
  }

  if (userSequence[USI] === randomSequence[RSI]) {
    string = string + "🟠";
  }

  return hints(randomSequence, userSequence, RSI, USI + 2, string);
}

function message(symbols, chances) {
  console.log("                       " + symbols);
  console.log("Chances Left‼️ : " + chances);

  if (symbols === "🟢🟢🟢🟢") {
    console.log("\n------*👏👏 FANTASTIC, YOU WON THE GAME*-------\n");
    return 1;
  }

  return 0;
}

function getUserSequence() {
  let userNumber = prompt("-----------------: ➡️ ");
  if (userNumber === "" || userNumber.length !== 7) {
    console.log("Please enter a valid Sequence");
    return getUserSequence();
  }

  return userNumber;
}

function userGuess(sequence, chances) {
  const userSequence = getUserSequence();
  const symbols = hints(sequence, userSequence, 0, 0, "");
  const value = message(symbols, chances - 1);

  if (value === 1) {
    return 0;
  }
  
  if (chances <= 1) {
    console.log("😱Oh No! You Used All Attempts. Better Luck Next Time👍");
    return "";
  }

  return userGuess(sequence, chances - 1);
}

function startGame(sequence, chances) {
  let confirmation = true;
  while(confirmation) {
    userGuess(sequence, chances);
    console.log("THE SEQUENCE IS😛 " + sequence);
    confirmation = confirm("\n ♻️ Do you want to play again");
    sequence = getRandomNumber(4);
    sequence = areDigitsSame(sequence, 0, 2);
  }

  console.log("OK, BYE 👋👋👋");
}

function masterMind(maxAttempts) {
  greetingsMessage();
  let sequence = getRandomNumber(4);
  sequence = areDigitsSame(sequence, 0, 2);
  startGame(sequence, maxAttempts);
}

masterMind(maxAttemps);
