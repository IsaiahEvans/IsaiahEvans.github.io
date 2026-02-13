document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("first_name").value.trim();
  const middle = document.getElementById("middle_initial").value.trim();
  const last = document.getElementById("last_name").value.trim();

  if (!first || !last) {
    alert("Please enter at least a First and Last name.");
    return;
  }

  // Greeting (middle initial optional)
  const fullName = first + (middle ? " " + middle + "." : "") + " " + last;
  document.getElementById("greeting").textContent =
    "Welcome to Streamline Studios, " + fullName + "!";

  // Division check function (required style from earlier labs)
  function checkDivision(number, divisor) {
    return number % divisor === 0;
  }

  // Flexible rules (ADD MORE HERE later without rewriting logic)
  const rules = [
    { divisor: 3, word: "EEK!" },
    { divisor: 5, word: "SCREAM!" },
    { divisor: 7, word: "BANG!" }
  ];

  const defaultWord = "Streamline Vision";

  const output = document.getElementById("output");
  output.innerHTML = "";

  const list = document.createElement("ul");

  for (let iCounter = 1; iCounter <= 140; iCounter++) {
    // Build words dynamically (no brute-force combos)
    let words = [];

    for (const rule of rules) {
      if (checkDivision(iCounter, rule.divisor)) {
        words.push(rule.word);
      }
    }

    const lineText =
      iCounter + ". " + (words.length ? words.join(" ") : defaultWord);

    const li = document.createElement("li");
    li.textContent = lineText;
    list.appendChild(li);
  }

  output.appendChild(list);
});
