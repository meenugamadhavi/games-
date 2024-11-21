function getmessge(number) {
  console.log("👏 Your number is " + number);
}

console.log("  In this game I'll try to guess the number  ");
console.log("-----*Assume number between 1 to 10*-----");

const isEven = confirm("Is the number  even❓");
const isPrime = confirm("Is it prime❓");
const islessthan6 = confirm("Is it less than 6❓");

if(isEven && isPrime) {
  getmessge(2);
}

if (isPrime && islessthan6 && !isEven) {
  const yesOrNo = confirm("I think number is 5. am i correct❓");
  if (yesOrNo) {
    getmessge(5);
  } else {
    getmessge(3);
  }
} 

if (isEven && islessthan6 && !isPrime) {
  getmessge(4);
}

if (!isEven && islessthan6 && !isPrime) {
  getmessge(1);
}

if (isPrime && !islessthan6) {
  getmessge(7);
}

if (!islessthan6 && !isPrime) {
  const has5asfactor = confirm("Is it divisible by 5❓");
  if (has5asfactor) {
    getmessge(10);
  }

  if (!has5asfactor && !isEven && !isPrime  ) {
    getmessge(9);
  }
}


if (!islessthan6 && isEven && !isPrime) {
  const is3factor = confirm("Is it divisible by 3❓");
  if (is3factor) {
    getmessge(6);
  } else {
    getmessge(8);
  }
}
