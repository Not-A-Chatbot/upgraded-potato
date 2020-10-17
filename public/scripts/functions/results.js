export var results = (score) => {
 var results = {};

 var botName = (index) => {
    if (index == 0) return "Alfred";
    if (index == 1) return "Jacques";
    if (index == 2) return "Mary";
    else return "error"
}

console.log("index of bot", score.indexOf(Math.max(...score)));


results.firstChoice = {
    "bot" : score.indexOf(Math.max(...score)),
    "botName" : botName(score.indexOf(Math.max(...score))),
    "score" : Math.max(...score)
}

console.log("podium : ", results , "1st : ", results.firstChoice)

 }



