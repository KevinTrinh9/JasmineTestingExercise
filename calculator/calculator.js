window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form")
  if (form) {
    setupIntialValues()
    form.addEventListener("submit", function(e) {
      e.preventDefault()
      update()
    })
  }
})

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  let values  = {amount: 10000, years: 10, rate: 5}
  let amountUI = document.getElementById("loan-amount")
  amountUI.value = values.amount
  let yearsUI = document.getElementById("loan-years")
  yearsUI.value = values.years
  let rateUI = document.getElementById("loan-rate")
  rateUI.value = values.rate
  update()
}

function update() {
  const currentUIValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}

function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12
  let n = Math.floor(values.years * 12)
  return ((monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2)
}

function updateMonthly(monthly) {
  let monthlyUI = document.getElementById("monthly-payment")
  monthlyUI.innerText = "$" + monthly
}