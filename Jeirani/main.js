const choices = [
  "მაკრატელი",
  "makrateli",
  "scissors",
  "1",
  "ჭა",
  "wa",
  "well",
  "2",
  "ქაღალდი",
  "qagaldi",
  "paper",
  "3",
];

const promptText = "\nაირჩიე ერთ-ერთი:\n    1) მაკრატელი\n    2) ჭა\n    3) ქაღალდი\n";
const failText = "უცნობი არჩევანი, ცადე თავიდან.";
let winCount1 = 0;
let winCount2 = 0;
let replay = true;

while (replay) {
  let choice1 = prompt("მომხმარებელი N1\n" + promptText);
  while (choice1 !== null && !choices.includes(choice1.toLowerCase())) {
    alert(failText);
    choice1 = prompt("მომხმარებელი N1\n" + promptText);
  }
  if (choice1 === null) {
    break;
  }

  let choice2 = prompt("მომხმარებელი N2\n" + promptText);
  while (choice2 !== null && !choices.includes(choice2.toLowerCase())) {
    alert(failText);
    choice2 = prompt("მომხმარებელი N2\n" + promptText);
  }
  if (choice2 === null) {
    break;
  }

  const valChoice1 = Math.floor(choices.indexOf(choice1.toLowerCase()) / (choices.length / 3));
  const valChoice2 = Math.floor(choices.indexOf(choice2.toLowerCase()) / (choices.length / 3));
  const diff = valChoice1 - valChoice2;
  let result;

  if (diff === 0) {
    result = "შედეგი: ფრე.";
  } else if (Number(diff > 0) === Math.abs(diff % 2)) {
    result = "შედეგი: გამარჯვებულია მომხმარებელი N1.";
    winCount1++;
  } else {
    result = "შედეგი: გამარჯვებულია მომხმარებელი N2.";
    winCount2++;
  }

  alert(result + `\nანგარიში: ${winCount1} - ${winCount2}.`);

  replay = confirm("ცადე თავიდან?");
}
