function showAnswers1(){
let answers = [
        "1. 26",
        "2. 22",
        "3. 9",
        "4. 2",
        "5. 48",
        "6. 700",
        "7. 14",
        "8. 3"
    ];

    document.getElementById("answers1").innerHTML = answers.join("<br><br>");

}

function showAnswers2(){
let answers = [
        "1. Positive",
        "2. Negative",
        "3. Positive",
        "4. Negative",
        "5. Nothing (0 is neither positive nor negative)",
        "6. Negative",
        "7. Positive",
        "8. Negative"
    ];

    document.getElementById("answers2").innerHTML = answers.join("<br><br>");

}

function showAnswers3(){
let answers = [
        "1. 2",
        "2. -2",
        "3. -48",
        "4. 2070",
        "5. 5",
        "6. -45",
        
    ];

    document.getElementById("answers3").innerHTML = answers.join("<br><br>");
}

function showExplanations(){
let answers = [
        "1. Positive and negative added together is negative. So we get 5-3 which is 2.",
        "2. A positive divided by a negative will give us a negative result. So 8/4 is 2 and we put the negative in front.",
        "3. Negative multiplied with a positive results in negative.16 times 3 is 48. We put the negative in front.",
        "4. The result will be positive because positive times positive is positive. 46 times 45 is 2070.",
        "5. Negative - negative equals a positive. So we add 1 and 4 and get 5.",
        "6. We subtract. However, since 45 is less than 90 we will get a negative number. We do it how we normally would and put the sign of the bigger number in front. 90-45 is 45. Since 90 has a negative in front, we put the negative in front and get -45.",
        
    ];

    document.getElementById("Explanations").innerHTML = answers.join("<br><br>");
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

    if (answer1 == "15") {
        score++;
    }

    if (answer2 == "3") {
        score++;
    }

    if (answer3 == "3") {
        score++;
    }

    if (answer4 == "9") {
        score++;
    }

    if (answer5 == "18") {
        score++;
    }

    if (answer6 == "-5"){
        score++;
    }

    if (answer7 == "-3"){
        score++;
    }

    if (answer8 == "-5"){
        score++;
    }

    if (answer9 == "-32"){
        score++;
    }

    if (answer10 == "6"){
        score++;
    }

    document.getElementById("score").innerHTML =
        "Your score is: " + score + "/10";
}