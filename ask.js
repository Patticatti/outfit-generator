const fs = require("fs");

let answerStream;

let questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with nose.js?",
];

let answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", function () {
  process.stdout.write("\n\n\n\n ");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]}`
  );
  process.stdout.write("\n\n\n\n");
});
