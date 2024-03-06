const fruits = [
  "banana",
  "apple",
  "grape",
  "strawberry",
  "melon",
  "avocado",
  "orange",
  "peach",
  "lemon",
  "kiwi",
];

const hints = [
  "Yellow, Peel, Tropical",
  "Red, Crunchy, Core",
  "Bunch, Vine, Juicy",
  "Red, Sweet, Seeds",
  "Green, Juicy, Round",
  "Green, Creamy, Pit",
  "Citrus, Round, Peel",
  "Fuzzy, Juicy, Stone",
  "Yellow, Sour, Citrus",
  "Fuzzy, Green, Seeds",
];

const triesPrompt = "Input number of tries, 'infinite' or 'auto':";
let replay = true;

while (replay) {
  let triesN = prompt(triesPrompt);
  while (
    !(
      triesN === null ||
      triesN.toLowerCase() === "infinite" ||
      triesN.toLowerCase() === "auto" ||
      (!isNaN(Number(triesN)) && Number.isInteger(Number(triesN)) && Number(triesN) > 0)
    )
  ) {
    alert("Unknown input, try again.");
    triesN = prompt(triesPrompt);
  }
  if (triesN === null) {
    break;
  }

  const randInd = Math.round(Math.random() * fruits.length);
  const fruit = fruits[randInd];
  const guesses = [];
  let triesLeft =
    triesN === "infinite" ? -1 : triesN === "auto" ? fruit.length + 2 : Number(triesN);
  let guess = "";

  for (let i = 0; i < fruit.length; i++) {
    guesses.push("_");
  }

  while (triesLeft !== 0) {
    let promptText = "Word: ";

    for (let i = 0; i < guesses.length; i++) {
      promptText += guesses[i] + " ";
    }

    if (triesLeft >= 0 && triesLeft < fruits.length / 2) {
      promptText += `\nHint: Fruit, ${hints[randInd]}`;
    }

    guess = prompt(
      promptText + `\nTries left: ${triesN === "infinite" ? triesN : triesLeft}\nGuess a letter:\n`
    );

    if (guess === null) {
      break;
    } else {
      if (guess.length !== 1) {
        alert("Input length must be 1.");
      } else if (guesses.includes(guess.toLowerCase())) {
        alert("Letter already guessed.");
      } else if (guess.toLowerCase() === guess.toUpperCase()) {
        alert("Input not an English letter.");
      } else {
        if (fruit.includes(guess.toLowerCase())) {
          for (let i = 0; i < fruit.length; i++) {
            if (fruit[i] === guess.toLowerCase()) {
              guesses[i] = fruit[i];
            }
          }
          alert("Correct guess!");
        } else {
          triesLeft--;
          alert("Wrong guess!");
        }
      }
    }

    if (guesses.join("") === fruit) {
      alert(`Word found!\nWord was ${fruit}.`);
      break;
    } else if (triesLeft === 0) {
      alert(`Failed!\nWord was ${fruit}.`);
    }
  }
  if (guess === null) {
    break;
  }

  replay = confirm("Try again?");
}
