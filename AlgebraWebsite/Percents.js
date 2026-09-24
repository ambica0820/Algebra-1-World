function Practice1() {
    const answers = ["1. 0.1", "2. 0.25", "3. 0.4", "4. 0.05", "5. 0.75", "6. 0.08", "7. 0.12", "8. 0.65", "9. 0.9", "10. 1.25"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice1Answers").innerHTML = output;
}

function Practice2() {
    const answers = ["1. 10%", "2. 25%", "3. 40%", "4. 5%", "5. 75%", "6. 8%", "7. 12%", "8. 65%", "9. 90%", "10. 125%"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice2Answers").innerHTML = output;
}


function Practice3() {
    const answers = ["1. 1/10", "2. 1/4", "3. 1/2", "4. 3/4", "5. 1/5", "6. 2/5", "7. 3/5", "8. 4/5", "9. 3/10", "10. 9/10"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice3Answers").innerHTML = output;
}

function Practice4() {
    const answers = ["1. 50%", "2. 25%", "3. 75%", "4. 20%", "5. 40%", "6. 60%", "7. 80%", "8. 10%", "9. 70%", "10. 90%"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice4Answers").innerHTML = output;
}

function Practice5() {
    const answers = ["1. 5", "2. 20", "3. 30", "4. 20", "5. 27", "6. 30", "7. 30", "8. 28", "9. 90", "10. 90"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice5Answers").innerHTML = output;
}

function Practice6() {
    const answers = ["1. 20%", "2. 25%", "3. 25%", "4. 25%"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice6Answers").innerHTML = output;
}

function Practice7() {
    const answers = ["1. 50", "2. 80", "3. 60", "4. 80", "5. 90"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice7Answers").innerHTML = output;
}

function Practice8() {
    const answers = ["1. 25%", "2. 30%", "3. 25%"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice8Answers").innerHTML = output;
}

function Practice9() {
    const answers = [
    "1. Discount: $10, Sale Price: $40",
    "2. Discount: $25, Sale Price: $75",
    "3. Discount: $24, Sale Price: $56",
    "4. Discount: $9, Sale Price: $51",
    "5. Discount: $48, Sale Price: $72"
];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice9Answers").innerHTML = output;
}

function Practice10() {
    const answers = [
    "1. Tax: $3.20, Final Price: $43.20",
    "2. Tax: $6.00, Final Price: $66.00",
    "3. Tax: $7.00, Final Price: $107.00",
    "4. Tax: $6.00, Final Price: $126.00",
    "5. Tax: $40.00, Final Price: $540.00"
];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice10Answers").innerHTML = output;
}

function Practice11() {
    const answers = ["1. 200 students", "2. $48", "3. $54", "4. 20%", "5. 25%"];
    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("practice11Answers").innerHTML = output;
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

    if (answer1 == "0.35") {
        score++;
    }

    if (answer2 == "65%") {
        score++;
    }

    if (answer3 == "3/4") {
        score++;
    }

    if (answer4 == "60%") {
        score++;
    }

    if (answer5 == "40") {
        score++;
    }

    if (answer6 == "25%") {
        score++;
    }

    if (answer7 == "80") {
        score++;
    }

    if (answer8 == "$60") {
        score++;
    }

    if (answer9 == "20%") {
        score++;
    }

    if (answer10 == "$108") {
        score++;
    }

    document.getElementById("quizAnswers").innerHTML =
        "Your score is: " + score + "/10";
}