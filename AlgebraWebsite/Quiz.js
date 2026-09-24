function checkAnswers() {

    let score = 0;

    let answers = [
        "a", "b", "a", "b", "d",
        "d", "a", "d", "c", "a",
        "a", "b", "b", "a", "b",
        "d", "c", "d", "a", "d",
        "a", "b", "b", "c", "d",
        "d", "6", "7", "4", "6",
        "a", "a", "a", "1/2", "2",
        "a", "b", "c", "d", "b", "a",
        "-3,-4", "3,2", "a", "a", "a"
    ];

    for (let i = 1; i <= 46; i++) {

        let input = document.querySelector('input[name="q' + i + '"]');

        if (input.type == "radio") {

            let answer = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (answer && answer.value == answers[i - 1]) {
                score++;
            }

        } else if (input.type == "text") {

            let answer = input.value.trim().replace(/\s/g, "");
            let correctAnswer = answers[i - 1].replace(/\s/g, "");

            if (answer == correctAnswer) {
                score++;
            }
        }
    }

    document.getElementById("score").innerHTML =
        "Score: " + score + "/46";
}