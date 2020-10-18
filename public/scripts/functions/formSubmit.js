import { gatherInputs } from "./gatherScore.js";
import { results } from "./results.js";

var formSubmit = () => {
  let btnSubmit = document.getElementById("submit");
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submission stopped", e);
    let score = gatherInputs();
    console.log("score is", score);
    results(score);
  });
};

formSubmit();
