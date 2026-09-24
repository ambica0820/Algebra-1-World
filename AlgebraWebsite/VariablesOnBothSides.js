function Practice1Answers() {
    const answers = [
        "1. 4",
        "2. 5",
        "3. 3",
        "4. 5",
        "5. 3"
    ];
let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("Practice1Answers").innerHTML = output;
}

function Practice2Answers() {
    const answers = [
        "1. 4",
        "2. 4",
        "3. -6",
        "4. 8",
        "5. 10"
    ];
let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("Practice2Answers").innerHTML = output;
}

function checkQuiz() {
    const correctAnswers = ["4", "5", "-6", "7", "7", "9"];
    let score = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
        const userAnswer = document.getElementById("q" + (i + 1)).value.trim();
        if (userAnswer === correctAnswers[i]) {
            score++;
        }
    }

    document.getElementById("score").innerHTML = "You scored: " + score + "/" + correctAnswers.length;
}

   