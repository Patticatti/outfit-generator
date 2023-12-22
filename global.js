process.stdout.write("Hello  ");
const questions = ["What is your name", "You stink"];
const answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n ${questions[i]} > `);
}

process.stdin.on("data", function (data) {
  process.stdout.write(data.toString().trim());
});

ask(answers.length);
