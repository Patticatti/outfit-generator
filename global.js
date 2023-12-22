process.stdout.write("Hello  ");
const questions = ["What is your name", "Whaddya wanna do"];
const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]} > `);
}

ask();

process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", function () {
  process.stdout.write("\n\n\n\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing answers later`
  );
});
