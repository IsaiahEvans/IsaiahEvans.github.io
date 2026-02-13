document.getElementById("fizzForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Get divisor numbers
    const div1 = parseInt(document.getElementById("div1").value);
    const div2 = parseInt(document.getElementById("div2").value);
    const div3 = parseInt(document.getElementById("div3").value);

    // Get words
    const word1 = document.getElementById("word1").value.trim();
    const word2 = document.getElementById("word2").value.trim();
    const word3 = document.getElementById("word3").value.trim();

    // Limit
    let limit = parseInt(document.getElementById("limit").value);
    if(isNaN(limit) || limit <= 0){
        alert("Enter a valid count number.");
        return;
    }

    // Put rules into an array (THIS is the whole assignment idea)
    const rules = [
        {divisor: div1, word: word1},
        {divisor: div2, word: word2},
        {divisor: div3, word: word3}
    ];

    const output = document.getElementById("output");
    output.innerHTML = "";

    const list = document.createElement("ol");

    for(let i = 1; i <= limit; i++){

        let words = [];

        for(const rule of rules){
            if(rule.divisor && i % rule.divisor === 0){
                words.push(rule.word);
            }
        }

        const li = document.createElement("li");

        // blank when nothing matches (REQUIRED BY ASSIGNMENT)
        if(words.length > 0){
            li.textContent = words.join(", ");
        } else {
            li.textContent = "";
        }

        list.appendChild(li);
    }

    output.appendChild(list);
});
