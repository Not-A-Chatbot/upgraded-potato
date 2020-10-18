import { formSubmit } from "./functions/formSubmit.js";

let btnSubmit = document.getElementById("submit");
let botsResult;

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  botsResult = formSubmit();
  console.log("submit triggered : ", botsResult);
  const resultsDisplay = document.getElementById("resultsDisplay");
  resultsDisplay.innerHTML = "";

  botsResult.map((x, index) => {
    let section = document.createElement("section");
    resultsDisplay.appendChild(section);
    let title = section.appendChild(document.createElement("h3"));
    let score = section.appendChild(document.createElement("aside"));
    title.innerText = x.botName;
    score.innerText = Math.round(x.score * 100) + "%";
  });
});
