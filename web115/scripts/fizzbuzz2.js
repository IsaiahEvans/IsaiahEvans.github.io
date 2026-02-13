document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("first_name").value.trim();
  const middle = document.getElementById("middle_initial").value.trim();
  const last = document.getElementById("last_name").value.trim();

  if (!first || !last) {
    alert("Please enter at least a First and Last name.");
    return;
  }


  const fullName = first + (middle ? " " + middle + "." : "") + " " + last;
  document.getElementById("greeting").textContent =
    "Welcome to Streamline Studios, " + fullName + "!";


  const firstDivisor = 3;
  const secondDivisor = 5;


  function checkDivision(number, divisor) {
    return number % divisor === 0;
  }

  
  const wordForFirst = "EEK!";
  const wordForSecond = "SCREAM!";
  const defaultWord = "Streamline Vision";


  const output = document.getElementById("output");
  output.innerHTML = "";

  const list = document.createElement("ul");

  for (let iCounter = 1; iCounter <= 140; iCounter++) {
    const isFirst = checkDivision(iCounter, firstDivisor);
    const isSecond = checkDivision(iCounter, secondDivisor);

    let text = `${iCounter}. `;

    if (isFirst && isSecond) {
      text += `${wordForFirst} ${wordForSecond}`;
    } else if (isFirst) {
      text += wordForFirst;
    } else if (isSecond) {
      text += wordForSecond;
    } else {
      text += defaultWord;
    }

    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  }

  output.appendChild(list);
});
