function showAnswers() {
   const answers = [
    "Answer 1: X = 1",
    "Answer 2: X = 1/4",
    "Answer 3: X = 24",
    "Answer 4: X = 12",
    "Answer 5: X = 1",
    "Answer 6: X = 4",
    "Answer 7: X = 7/6",
    "Answer 8: X = 3/2",
    "Answer 9: X = -6"
   ];

   let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("answers").innerHTML = output;
}


function showExplanations() {
    const explanations =[
    "Explanation 1: Subtract 5 from both sides. X = 8 - 5 = 3. We get 3X = 3. Now divide by 3 on both sides. X = 3/3 = 1.",
    "Explanation 2: Subtract 7 from both sides. 4X = 8 - 7 = 1. We now get 4X = 1. To get X, we divide by 4 on both sides. X = 1/4.",
    "Explanation 3: Add 10 to both sides. X = 14 + 10 = 24.",
    "Explanation 4: Subtract 7 from both sides. X = 19 - 7 = 12.",
    "Explanation 5: Subtract 8 from both sides. 2X = 10 - 8 = 2. We now have 2X = 2. To get X, we divide by 2 on both sides. X = 2/2 = 1.",
    "Explanation 6: Divide by 3 on both sides. X = 12/3 = 4.",
    "Explanation 7: Subtract 17 from both sides. 6X = 24 - 17 = 7. We now have 6X = 7. Now, we divide by 6 on both sides. X = 7/6.",
    "Explanation 8: Add 2 to both sides. 4X = 4 + 2 = 6. Then divide 4 on both sides. 4X / 4 is X and we are left with X = 6/4 which simplifies to 3/2.",
    "Explanation 9: Simplify the left side. X + 3 - 3 = X. The +3 and -3 cancel out. So, X = -6."
    ];
    
    let output = "";
    for (let i = 0; i < explanations.length; i++) {
        output += explanations[i] + "<br>";
    }
    document.getElementById("explanations").innerHTML = output;
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

    if (answer1 == "-1/3"){
        score++;
    }

    if (answer2 == "-7/2"){
        score++;
    }

    if (answer3 == 1){
        score++;
    }

    if (answer4 == 5){
        score++;
    }

    if (answer5 == 3){
        score++;
    }

    if (answer6 == 2){
        score++;
    }

    if (answer7 == 1){
        score++;
    }

    if (answer8 == "3"){
        score++;
    }

    if (answer9 == 3){
        score++;
    }

    if (answer10 == 3){
        score++;
    }

    document.getElementById("score").innerHTML = "Your score is: " + score + "/10";
}