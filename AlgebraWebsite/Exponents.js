function PracticeProblemAnswers() {
    const answers = [
"Question 1: 81",
"Question 2: 32",
"Question 3: 216",
"Question 4: 16",
"Question 5: 125",

        
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblemAnswers").innerHTML = output;
}


function PracticeProblemAnswers2() {
    const answers = [
"Question 1: 3<sup>13</sup>",
"Question 2: 2<sup>14</sup>",
"Question 3: 6<sup>6</sup>",
"Question 4: 1",
"Question 5: 1 / (5<sup>3</sup>)",

        
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblemAnswers2").innerHTML = output;
}

function checkQuiz() {


    let score = 0;

    let answer1 = document.getElementById("q1").value;
    let answer2 = document.getElementById("q2").value;
    let answer3 = document.getElementById("q3").value;
    let answer4 = document.getElementById("q4").value;
    let answer5 = document.getElementById("q5").value;

    if (answer1 == "125") {
        score++;
    }

    if (answer2 == "16/125") {
        score++;
    }

    if (answer3 == "1/36") {
        score++;
    }

    if (answer4 == "1/25") {
        score++;
    }

    if (answer5 == "1") {
        score++;
    }

    document.getElementById("score").textContent =
        "Score: " + score + "/5";
}