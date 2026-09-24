function Answers() {

    const answers = [
        "Commutative Property",
        "Associative Property",
        "Distributive Property",
        "Identity Property",
        "Zero Property",
        "Distributive Property",
        "Commutative Property",
        "Associative Property",
        "Identity Property",
        "Distributive Property"
    ];

    let output = "";

    for (let i = 0; i < answers.length; i++) {
        output += answers[i] + "<br>";
    }

    document.getElementById("Answers").innerHTML = output;
}