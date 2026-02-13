document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("first_name").value.trim();
  const middle = document.getElementById("middle_initial").value.trim();
  const last = document.getElementById("last_name").value.trim();

  if (!first || !last) {
    alert("Please enter at least a First and Last name.");
    return;
  }

  // Build greeting (omit middle initial if empty)
  let fullName = first + (middle ? " " + middle + "." : "") + " " + last;
  document.getElementById("greeting").textContent =
    "Welcome to Streamline Studios, " + fullName + "!";

  // FLEXIBLE settings (easy to change later)
  const rules = [
    { num: 3, word: "EEK!" },
    { num: 5, word: "SCREAM!" }
  ];

  const output = document.getElementById("output");
  output.innerHTML = ""; // clear old output

  const list = document.createElement("ul");

  for (let i = 1; i <= 140; i++) {
    let words = [];

    for (const rule of rules) {
      if (i % rule.num === 0) words.push(rule.word);
    }

    // If not divisible by 3 or 5, use your regular themed phrase
    const lineText = `${i}. ${words.length ? words.join(" ") : "Streamline Vision"}`;

    const li = document.createElement("li");
    li.textContent = lineText;
    list.appendChild(li);
  }

  output.appendChild(list);
});
