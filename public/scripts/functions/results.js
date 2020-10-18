export var results = (score) => {
  var results = [];

  var botName = (index) => {
    if (index == 0) return "Alfred";
    if (index == 1) return "Jacques";
    if (index == 2) return "Mary";
    else return "error";
  };


  for (let i = 0; i < score.length; i++) {
    let botScore = {
      bot: score.indexOf(Math.max(...score)),
      botName: botName(score.indexOf(Math.max(...score))),
      score: Math.max(...score),
    };

    results.push(botScore);
    score[botScore.bot] = -1;
  }

  console.log("podium : ", results, "1st : ", results[0]);
  return results;
};
