export var gatherInputs = () => {
  let inputs = document.querySelectorAll("input");
  let checkedBoxes = null;
  let score = [0, 0, 0];

  inputs.forEach((input) => {
    if (input.checked) {
      checkedBoxes++;
      console.log("input ", input.id, " is checked, value is ", input.value);
      let inputScore = input.value.split(",");
      for (let i = 0; i < 3; i++) {
        score[i] += parseInt(inputScore[i], 10);
      }
    }
    //console.log("new input verified, total checked boxes :", checkedBoxes);
    //console.log("values at this moment :", inputsValues);
    //console.log("score at this moment :", score);
  });
  //console.log("score at this moment :", score);
  score = score.map((x) => x / checkedBoxes);
  console.log("average score:", score);
  return score;
};
