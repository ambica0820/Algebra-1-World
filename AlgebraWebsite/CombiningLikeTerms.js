function showAnswers() {
    const answers = [
        "Answer 1: No",
        "Answer 2: Yes , 10A",
        "Answer 3: Yes , 7M<sup>2</sup>",
        "Answer 4: No",
        "Answer 5: Yes, 11X<sup>3</sup>",
        "Answer 6: Yes , 5B",
        "Answer 7: No",
        "Answer 8: Yes , 10K<sup>2</sup>",
        "Answer 9: Yes , 6X",
        "Answer 10: Yes , 8Y"
    ];

    for (let i = 1; i <= answers.length; i++) {
        document.getElementById("answer" + i).innerHTML = answers[i - 1];
    }
}

function showExplanations() {
    const explanations = [
        "Explanation 1: The terms are not like terms because they have different variables.",
        "Explanation 2: The terms are like terms because they have the same variable and exponent. 3 + 7 = 10, and add the A. This equals to 10A.",
        "Explanation 3: The terms are like terms because they have the same variable and exponent. 2 + 5 = 7 and add the M squared to it. This equals to 7M squared.",
        "Explanation 4: The terms are not like terms because they have different variables.",
        "Explanation 5: The terms are like terms because they have the same variable and exponent. 8 + 3 = 11, and add X cubed to it. This adds up to 11X cubed.",
        "Explanation 6: The terms are like terms because they have the same variable and exponent. 9 - 4 is 5, and add the B to it. So the answer is 5B.",
        "Explanation 7: The terms are not like terms because they have different variables.",
        "Explanation 8: The terms are like terms because they have the same variable and exponent. 7 + 3 = 10 and add the K squared to it. So it is 10K squared.",
        "Explanation 9: The terms are like terms because they have the same variable and exponent. 10 - 4 = 6 and add the X to it. Final answer: 6X.",
        "Explanation 10: The terms are like terms because they have the same variable and exponent. 6 + 2 = 8 and add the Y to it. Final answer: 8Y."
    ];

    for (let i = 1; i <= explanations.length; i++) {
        document.getElementById("explanation" + i).innerText = explanations[i - 1];
    }
}

function checkAnswers(){

    let answer1 = document.getElementById("q1").value;
    let answer2 = document.getElementById("q2").value;
    let answer3 = document.getElementById("q3").value;
    let answer4 = document.getElementById("q4").value;
    let answer5 = document.getElementById("q5").value;
    let answer6 = document.getElementById("q6").value;

        let score = 0;

        if (answer1 == "NP"){
            score++;
        }

        if (answer2 == "NP"){
            score++;
        }

        if (answer3 == "20x"){
            score++;
        }

        if (answer4 == "NP"){
            score++;
        }

        if (answer5 == "120x"){
            score++;
        }

        if (answer6 == "26Y"){
            score++;
        }

 document.getElementById("score").innerHTML =
        "Your score is: " + score + "/6";}