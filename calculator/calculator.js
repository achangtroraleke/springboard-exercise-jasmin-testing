window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").setAttribute('value', 10000);
  document.getElementById("loan-years").setAttribute('value', 3);
  document.getElementById("loan-rate").setAttribute('value', 5)
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let {amount, years, rate} = values;
  let i = (rate / 100) /12;
  let n = years*12
  let result = (amount * i)/(1 - (1 + i)**((Math.abs(n))*-1 ))
  let formattedResult = Math.round(result*100)/100
  
  
  return formattedResult
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyAmount = document.querySelector('#monthly-payment')
  monthlyAmount.textContent = '$'+monthly.toFixed(2)
}
