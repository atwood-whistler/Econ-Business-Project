// totalprice.js

const nightlyRate = 240;
const cleaningFee = 60;
const serviceFee = 35;
const taxRate = 0.08; // 8% tax, adjust as needed

const checkInInput = document.getElementById("checkin");
const checkOutInput = document.getElementById("checkout");
const totalDiv = document.getElementById("total");
const taxesDiv = document.getElementById("taxes");

function updateTotal() {
  const checkIn = new Date(checkInInput.value);
  const checkOut = new Date(checkOutInput.value);

  if (checkIn && checkOut && checkOut > checkIn) {
    const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    const subtotal = (nights * nightlyRate) + cleaningFee + serviceFee;
    const taxes = Math.round(subtotal * taxRate);
    const total = subtotal + taxes;

    taxesDiv.textContent = `Taxes: $${taxes}`;
    totalDiv.textContent = `Total: $${total}`;
  } else {
    taxesDiv.textContent = "Taxes: $0"; // default
    totalDiv.textContent = "Total before taxes: $0"; // default
  }
}

checkInInput.addEventListener("change", updateTotal);
checkOutInput.addEventListener("change", updateTotal);
