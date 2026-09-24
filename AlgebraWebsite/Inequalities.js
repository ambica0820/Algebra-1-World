function check(){
    const answers = [
        "Question 1: x > 4",
        "Question 2: x ≤ 11",
        "Question 3: x ≥ 6",
        "Question 4: x < 4",
        "Question 5: x < -5",
        "Question 6: x ≥ -4"
    ];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("Answers").innerHTML = output;
}

let currentInput;

function selectInput(input) {
    currentInput = input;
}

function addSymbol(symbol) {
    currentInput.value += symbol;
}


function checkQuiz() {
    let answer1 = document.getElementById("q1").value;
    let answer2 = document.getElementById("q2").value;
    let answer3 = document.getElementById("q3").value;
    let answer4 = document.getElementById("q4").value;
    let answer5 = document.getElementById("q5").value;
    let answer6 = document.getElementById("q6").value;

    let score = 0;

    if (answer1 == "x < 2/7") {
        score++;
    }

    if (answer2 == "x ≥ 4") {
        score++;
    }

    if (answer3 == "x ≤ 4") {
        score++;
    }

    if (answer4 == "x > 4") {
        score++;
    }

    if (answer5 == "x > -7") {
        score++;
    }

    if (answer6 == "x ≤ -3") {
        score++;
    }

    document.getElementById("score").innerHTML =
        "Your score is: " + score + "/6";
}