import { gatherInputs } from "./gatherScore.js";
import { results } from "./results.js";

export var formSubmit = () => {
console.log('in formSubmit');
    let score = gatherInputs();
    console.log("score is", score);
    return results(score);
};


