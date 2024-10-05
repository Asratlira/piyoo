document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAddMoney = document.getElementById("input-add-money").value;
    const inputPin = document.getElementById("input-pin").value;

    if (inputPin === "1234") {
      const mainBalance = document.getElementById("input-balance").innerText;
      const addMoney = parseFloat(inputAddMoney);
      const balance = parseFloat(mainBalance);
      const newBalance = addMoney + balance;
      document.getElementById("input-balance").innerText = newBalance;
      console.log(newBalance);
    } else {
      alert("please try again!");
    }
  });
