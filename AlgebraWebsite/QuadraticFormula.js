function Answers1() {
    const answers = [
        "Question 1: (x + 4)(x + 5)",
        "Question 2: (x + 3)(x + 8)",
        "Question 3: (x + 3)(x + 5)",
        "Question 4: (x - 4)(x - 5)",
        "Question 5: (x - 3)(x - 4)",
        "Question 6: (x - 4)(x - 7)",
        "Question 7: (x + 5)(x - 4)",
        "Question 8: (x - 5)(x + 4)"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("Answers1").innerHTML = output;
}

function Answers2() {
const answers = [
    "1. (-5 + √13) / 2, (-5 - √13) / 2",
    "2. (-7 + √33) / 4, (-7 - √33) / 4"
];
        

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("Answers2").innerHTML = output;
}

let currentQuestion = null;

function addRadical(){
    if (currentQuestion != null){
        document.getElementById(currentQuestion).value += "√";
    }
}

function checkAnswers(){

    let answer1 = document.getElementById("q1").value.replace(/\s/g, "");
    let answer2 = document.getElementById("q2").value.replace(/\s/g, "");
    let answer3 = document.getElementById("q3").value.replace(/\s/g, "");
    let answer4 = document.getElementById("q4").value.replace(/\s/g, "");
    let answer5 = document.getElementById("q5").value.replace(/\s/g, "");
    let answer6 = document.getElementById("q6").value.replace(/\s/g, "");
    let answer7 = document.getElementById("q7").value.replace(/\s/g, "");

    let score = 0;

    if (answer1 == "-3,5"){
        score++;
    }

    if (answer2 == "-3,-4"){
        score++;
    }

    if (answer3 == "-2,7"){
        score++;
    }

    if (answer4 == "-1/2,-3"){
        score++;
    }

    if (answer5 == "(2+√10)/3,(2-√10)/3"){
        score++;
    }

    if (answer6 == "(-3+√65)/4,(-3-√65)/4"){
        score++;
    }

    if (answer7 == "(5+√73)/6,(5-√73)/6"){
        score++;
    }

    document.getElementById("score").innerHTML = "Your score is: " + score + " / 7";
}