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

  if (diff === 0) {
    alert("შედეგი: ფრე");
  } else if (diff > 0 == diff % 2) {
    alert("შედეგი: გამარჯვებულია მომხმარებელი N1");
  } else {
    alert("შედეგი: გამარჯვებულია მომხმარებელი N2");
  }

  replay = confirm("ცადე თავიდან?");
}
