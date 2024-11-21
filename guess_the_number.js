const start = 10;
const end = 20;
const maxAttemps = 4;
const difference = end - start;

function greetingsMessage(start, end, maxAttemps) {
  let greetings = "--*🌺Welcome to Guess the Number!  The secret number is ";
  greetings += "between " + start + " and " + end + "🌺*--\nyou have ";
  greetings += maxAttemps + " attempts to find it."

  return greetings;
}

function getUserNumber(chances) {
  const number = +prompt("Take a guess! (Remaining attemts: " + chances + ")");
  if ("" + number === "NaN") {
    console.log("❌ Invalid input! Please enter a number.");
    return getUserNumber(chances);
  }
  return number;
}

function getNumberAgain(userNumber, chances, randomNumber) {
  if (chances === 1) {
    if (userNumber != randomNumber) {
      console.log("😱Oh no! you used all attempts better luck next time👍");
    }
    return 0;
  }

  userNumber = getUserNumber(chances - 1);
  userGotCorrect(userNumber, chances - 1, randomNumber);
}

function userGotCorrect(userNumber, chances, randomNumber) {
  if (userNumber !== randomNumber && userNumber < randomNumber) {
    console.log(userNumber + " Too low! Try a higher number.");
    getNumberAgain(userNumber, chances, randomNumber);
  }

  if (userNumber !== randomNumber && userNumber > randomNumber) {
    console.log(userNumber + " Too high! Try a smaller number.");
    getNumberAgain(userNumber, chances, randomNumber);
  }

  if (userNumber === randomNumber) {
    console.log("👏👏Bravo! You've nailed it. The number was " + userNumber);
    getNumberAgain(userNumber, 1, randomNumber);
  }
}

function guessNumber(start, end, maxAttemps) {
  const message = greetingsMessage(start, end, maxAttemps);
  console.log(message);
  let randomNumber = Math.round(Math.random() * difference) + start;
  let confirmation = true;
  while (confirmation) {
    let userNumber = getUserNumber(maxAttemps);
    userGotCorrect(userNumber, maxAttemps, randomNumber);
    confirmation = confirm("Do you want to play again?");
    randomNumber = Math.round(Math.random() * difference) + start;
  }

  if (!confirmation) {
    console.log("Goodbye");
  }
}

guessNumber(start, end, maxAttemps);
