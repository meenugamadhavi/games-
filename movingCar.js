function delay() {
  for (let i = 0; i <= 90000000; i++) {

  }
}

function moveCar(index) {
  let str = "";
  if (index === 0) {
    return ""
  }


  console.log(getSpace((index - 3), "-"), "🚙");
  console.log(getSpace(index - 5, "-"), "🚕");
  delay();
  console.clear();
  moveCar(index - 1)
}

function repeat(number, stringToRepeat) {
  if (number <= 1) {
    return "";
  }
  
  return stringToRepeat + repeat(number - 1, stringToRepeat);
}

function getSpace(reqSpaces, symbol) {
  return repeat(reqSpaces, symbol);
}

moveCar(125)
