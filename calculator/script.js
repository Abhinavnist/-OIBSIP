let expression = ""
let result = document.querySelector(".result")

function appendSymbol(symbol) {
  expression += symbol
  result.value = expression
}

function calculate() {
  try {
    expression = eval(expression).toString()
    result.value = expression
  } catch (error) {
    alert("Invalid Expression")
    clearResult()
  }
}

function clearResult() {
  expression = ""
  result.value = ""
}

function backspace() {
  expression = expression.slice(0, -1)
  result.value = expression
}

function clearEntry() {
  expression = expression.replace(/[-+*/][^*/]*$/, "")
  result.value = expression
}

document.addEventListener("keydown", function (event) {
  if (event.key >= 0 && event.key <= 9) {
    appendSymbol(event.key)
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    appendSymbol(event.key)
  } else if (event.key === "Enter" || event.key === "=") {
    calculate()
  } else if (event.key === "Backspace") {
    backspace()
  } else if (event.key === ".") {
    appendSymbol(event.key)
  }
})

function setDecimalPrecision() {
  let precision = prompt("Enter the number of decimal places:", "2")
  if (precision != null && precision !== "") {
    expression = Number.parseFloat(expression).toFixed(precision).toString()
    result.value = expression
  }
}
