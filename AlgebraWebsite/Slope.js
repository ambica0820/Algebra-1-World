function Answers1(){
    const answers = [
"Question 1: 5/9",
"Question 2: 8/10 (because negative &divide; negative is positive)",
"Question 3: 2/6 or 1/3",
"Question 4: -1/3",
"Question 5: -4/8 or -1/2"
    ];
     let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }
    document.getElementById("Answers1").innerHTML = output;
}

function Answers2(){
    const answers = [
"Question 1: 13/4",
"Question 2: 3",
"Question 3: 3/2",
"Question 4: 4/3",
    ];
     let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }
    document.getElementById("Answers2").innerHTML = output;
}

function checkAnswers(){
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

    if (answer1 == "5/9"){
        score++;
    }

    if (answer2 == "-4/9"){
        score++;
    }

    if (answer3 == "1/2"){
        score++;
    }

    if (answer4 == "5/27"){
        score++;
    }
    
    if (answer5 == 1){
        score++;
    }

    if (answer6 == "-1/2"){
        score++;
    }

    if (answer7 == "36/29"){
        score++;
    }

    if (answer8 == "5/9"){
        score++;
    }

    if (answer9 == "DNE"){
        score++;
    }

    if(answer10 == "9/4"){
        score++;
    }

    document.getElementById("score").innerHTML = "You scored: " + score + (" / 10");
}