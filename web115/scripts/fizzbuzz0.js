document.getElementById("nameForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let first = document.getElementById("first_name").value.trim();
    let middle = document.getElementById("middle_initial").value.trim();
    let last = document.getElementById("last_name").value.trim();

    // Build greeting
    let greetingText = "Welcome to Streamline Studios ";

    if (first !== ""){
        greetingText += first + " ";
    }

    if (middle !== ""){
        greetingText += middle + ". ";
    }

    if (last !== ""){
        greetingText += last;
    }

    document.getElementById("greeting").textContent = greetingText;

    // Ask how high to count
    let limit = prompt("How high do you want to count, " + first + "?");
    limit = parseInt(limit);

    if (isNaN(limit) || limit <= 0){
        alert("Please enter a valid number.");
        return;
    }

    let output = document.getElementById("output");
    output.innerHTML = "";

    // themed words (your brand theme)
    let word1 = "Streamline";
    let word2 = "Vision";

    for (let i = 1; i <= limit; i++){

        let evenOdd = (i % 2 === 0) ? "even" : "odd";

        output.innerHTML += i + ") " + word1 + " " + word2 + " - the number is " + evenOdd + "<br>";
    }
});
