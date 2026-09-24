function showAnswers() {
    document.getElementById("answers").innerHTML =
    "Answer to Problem 1: 11 <br>" +
    "Answer to Problem 2: 5 <br>" +
    "Answer to Problem 3: -1 <br>" +
    "Answer to Problem 4: 12 <br>" +
    "Answer to Problem 5: 11";
}

function showExplanations() {
    document.getElementById("explanations").innerHTML =
    "Explanation to Problem 1: Multiplication comes first so we do 2 * 3 which is 6. Then we add it to 5 which is 11 because 6 + 5 = 11. <br> <br>" +
    "Explanation to Problem 2: Parentheses comes first in PEMDAS. 4 + 6 = 10. And then comes division in the problem. 10 / 2 is 5. <br> <br>" +
    "Explanation to Problem 3: Parentheses first. 2 + 1 = 3. We then get 8 - 3 * 3. Multiplication will be performed next. 3 * 3 is 9. Now we have 8 - 9. 8 is smaller than 9 which means we will be getting a negative number. 8 - 9 is -1. <br> <br>" +
    "Explanation to Problem 4: Parentheses comes here first. 5 - 3 is 2. Noe we get 10 divided by 2 plus 7. 10 divided by 2 is 5. Last step is to add 5 to 7 which is 12. <br> <br>" +
    "Explanation to Problem 5: Multiplication first. 4 * 2 is 8. We get 6 + 8 - 3. Addition next. 6 + 8 = 14. After that, we get 14-3 which is 11.";
}

function checkQuiz() {

    let answer1 = document.getElementById("q1").value;
    let answer2 = document.getElementById("q2").value;
    let answer3 = document.getElementById("q3").value;
    let answer4 = document.getElementById("q4").value;
    let answer5 = document.getElementById("q5").value;
    let answer6 = document.getElementById("q6").value;
    let answer7 = document.getElementById("q7").value;
    let answer8 = document.getElementById("q8").value;
    let answer9 = document.getElementById("q9").value;
    let answer10 = document.getElementById("q10").value;

    let score = 0;

    if (answer1 == "11") {
        score++;
    }

    if (answer2 == "16") {
        score++;
    }

    if (answer3 == "6") {
        score++;
    }

    if (answer4 == "16"){
        score++;
    }

    if (answer5 == "11") {
        score++;
    }

    if (answer6 == "6") {
        score++;
    }

    if (answer7 == "8") {
        score++;
    }

    if (answer8 == "13") {
        score++;
    }

    if (answer9 == "16") {
        score++;
    }

    if (answer10 == "13") {
        score++;
    }

    document.getElementById("score").innerHTML =
        "Your score is: " + score + "/10";
}
