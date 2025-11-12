// script.js

const nightlyRate = 189;
const cleaningFee = 60;
const serviceFee = 35;

const checkInInput = document.getElementById("checkin");
const checkOutInput = document.getElementById("checkout");
const totalDiv = document.getElementById("total");

function updateTotal() {
  const checkIn = new Date(checkInInput.value);
  const checkOut = new Date(checkOutInput.value);

  if (checkIn && checkOut && checkOut > checkIn) {
    const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    const subtotal = (nights * nightlyRate) + cleaningFee + serviceFee;
    totalDiv.textContent = `Total before taxes: $${subtotal}`;
  }
}

checkInInput.addEventListener("change", updateTotal);
checkOutInput.addEventListener("change", updateTotal);
