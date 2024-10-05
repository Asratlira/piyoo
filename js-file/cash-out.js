document
  .getElementById("button-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("cash-out-money").value;
    const cashPin = document.getElementById("cash-out-pin").value;
    if (cashPin === "1234") {
      const balance = document.getElementById("input-balance").innerText;
      const cashBalance = parseFloat(cashOut);
      const mainCash = parseFloat(balance);
      const newBalance = mainCash - cashBalance;
      document.getElementById("input-balance").innerText = newBalance;
    } else {
      alert("wrong pin!");
    }
  });
