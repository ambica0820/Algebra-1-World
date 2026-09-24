function PracticeProblems1Answers(){
     const answers = [
        "Question 1: Ten Thousandths",
        "Question 2: Ten Thousands",
        "Question 3: Hundredths",
        "Question 4: Hundredths"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems1Answers").innerHTML = output;
}

function PracticeSet2Answers(){
     const answers = [
        "Question 1: <",
        "Question 2: <",
        "Question 3: =",
        "Question 4: >",
        "Question 5: <",
        "Question 6: =",
        "Question 7: <",
        "Question 8: >",
        "Question 9: <",
        "Question 10:<"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeSet2Answers").innerHTML = output;
}

function PracticeProblems3Answers(){
     const answers = [
        "Question 1: 5",
        "Question 2: 8",
        "Question 3: 7",
        "Question 4: 9",
        "Question 5: 3.5",
        "Question 6: 7.8",
        "Question 7: 5.3",
        "Question 8: 8.8",
        "Question 9: 4.58",
        "Question 10: 9.13"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems3Answers").innerHTML = output;
}

function PracticeProblems4Answers(){
    const answers = [
        "Question 1: 5.9",
        "Question 2: 8.5",
        "Question 3: 6.55",
        "Question 4: 11.05",
        "Question 5: 20.59"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems4Answers").innerHTML = output;
}

function PracticeProblems5Answers() {
    const answers = [
        "Question 1: 6.2",
        "Question 2: 5.2",
        "Question 3: 4.65",
        "Question 4: 3.65",
        "Question 5: 7.35"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems5Answers").innerHTML = output;
}

function PracticeProblems6Answers() {
    const answers = [
        "Question 1: 9.2",
        "Question 2: 9",
        "Question 3: 8.4",
        "Question 4: 5.46",
        "Question 5: 10.5"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems6Answers").innerHTML = output;
}

function PracticeProblems7Answers() {
    const answers = [
        "Question 1: 3.2",
        "Question 2: 1.8",
        "Question 3: 6.3",
        
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems7Answers").innerHTML = output;
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
    
    if (answer1 == "0.8"){
        score++;
    }
    if (answer2 == "0.3"){
        score++;
    }
    if (answer3 == "0.12"){
        score++;
    }
    if (answer4 == "2"){
        score++;
    }
    if (answer5 == "3.8"){
        score++;
    }
    if (answer6 == "6.3409"){
        score++;
    }
    if (answer7 == "2"){
        score++;
    }
    if (answer8 == "1.2"){
        score++;
    }
    if (answer9 == "0.45"){
        score++;
    }
    if (answer10 == "4"){
        score++;
    }

    document.getElementById("score").innerHTML = "Your score is: " + score + "/10";
}