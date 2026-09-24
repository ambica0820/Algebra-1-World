function PracticeSet1Answers() {

    const answers = [
        "Question 1: Yes",
        "Question 2: Yes",
        "Question 3: No",
        "Question 4: No"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeSet1Answers").innerHTML = output;
}

function PracticeSet2Answers() {

    const answers = [
        "Question 1: 8/3",
        "Question 2: 13/4",
        "Question 3: 28/3",
        "Question 4: 51/6",
        "Question 5: 16/6",
        "Question 6: 36/7"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeSet2Answers").innerHTML = output;
}

function PracticeSet3Answers() {

    const answers = [
        "Question 1: True",
        "Question 2: True",
        "Question 3: False",
        "Question 4: False",
        "Question 5: True",
        "Question 6: True"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeSet3Answers").innerHTML = output;
}

function PracticeProblems4Answers() {

    const answers = [
        "Question 1: 5/3",
        "Question 2: 17/10",
        "Question 3: 5/3",
        "Question 4: 1",
       
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems4Answers").innerHTML = output;
}

function PracticeProblems5Answers() {
    const answers = [
        "Question 1: 62/40 or 31/20",
        "Question 2: 13/9",
        "Question 3: 19/12",
        "Question 4: 76/45",
        "Question 5: 26/35"
       
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems5Answers").innerHTML = output;
}

function PracticeProblems6Answers() {
    const answers = [
        "Question 1: 1/7",
        "Question 2: 1/10",
        "Question 3: -8/11",
        "Question 4: -16/90 or -8/45",
        "Question 5: -5/80 or -1/16"
       
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems6Answers").innerHTML = output;
}

function PracticeProblem7Answers() {
    const answers = [
        "Question 1: 1/4",
        "Question 2: 1/2",
        "Question 3: 1/2",
        "Question 4: 5/8",
       
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblem7Answers").innerHTML = output;
}

function PracticeProblem8Answers() {
    const answers = [
        "Question 1: -27/40",
        "Question 2: 1/200",
        "Question 3: -5/8",
        "Question 4: 3/5",
       
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblem8Answers").innerHTML = output;
}

function PracticeProblems9Answers() {
    const answers = [
        "Question 1: 9/7",
        "Question 2: 3/4",
        "Question 3: -8/5",
        "Question 4: -9/5",
        "Question 5: -9/5",
        "Question 6: 3/10"
       
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("PracticeProblems9Answers").innerHTML = output;
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

    if (answer1 == "2") {
        score++;
    }

    if (answer2 == "1") {
        score++;
    }

    if (answer3 == "1/2") {
        score++;
    }

    if (answer4 == "5/12") {
        score++;
    }

    if (answer5 == "7/2") {
        score++;
    }

    if (answer6 == "14/15") {
        score++;
    }

    if (answer7 == "1/9") {
        score++;
    }

    if (answer8 == "6/35") {
        score++;
    }

    if (answer9 == "5/4") {
        score++;
    }

    if (answer10 == "5/6") {
        score++;
    }   

    document.getElementById("score").innerHTML =
        "Your score is: " + score + "/10";
}