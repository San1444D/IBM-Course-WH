function compute() {
  let principal = parseInt(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let years = parseInt(document.getElementById("years").value);

  let interest = (principal * years * rate) / 100;
  let amount = principal + interest;

  let result = document.getElementById("result");

  if (principal <= 0) {
    alert("Enter a positive numbe");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "If you deposit <mark> $" +
      principal +
      " </mark>,<br>at an interest rate of <mark> " +
      rate +
      "% </mark>.<br>You will receive an amount of <mark> $" +
      interest +
      "</mark>,<br>in the year " +
      years +
      "<br>";
  }
}

function updateRate() {
  let rateval = document.getElementById("rate").value;
  let span = document.getElementById("rate_val");
  span.textContent = rateval;
}
