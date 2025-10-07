// JavaScript with QR code scanning, discrepancy handling, and validation logic
document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("next-button");
  const backBtn = document.getElementById("back-button");
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const timestamp = document.getElementById("timestamp");

  timestamp.textContent = new Date().toLocaleString();

  nextBtn.addEventListener("click", () => {
    screen1.style.display = "none";
    screen2.style.display = "block";
    document.getElementById("page-indicator").textContent = "Page 2 of 2";
  });

  backBtn.addEventListener("click", () => {
    screen2.style.display = "none";
    screen1.style.display = "block";
    document.getElementById("page-indicator").textContent = "Page 1 of 2";
  });

  document.getElementById("scan-upc").addEventListener("click", () => {
    const upcInput = document.getElementById("upc");
    upcInput.value = "FAKEUPC123456";
    new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg").play();
  });

  const boxInputs = document.querySelectorAll(".box-style");
  boxInputs.forEach(input => {
    input.addEventListener("input", () => {
      const total = Array.from(boxInputs).reduce((sum, el) => sum + (parseInt(el.value) || 0), 0);
      const expected = parseInt(document.getElementById("expected-total").value) || 0;
      const feedback = document.getElementById("subtotal-feedback");
      feedback.textContent = `Subtotal: ${total} | Expected: ${expected}`;
      feedback.style.color = total === expected ? "green" : "red";
    });
  });

  document.getElementById("brand").addEventListener("focus", (e) => {
    if (e.target.value) e.target.readOnly = true;
  });
  document.getElementById("gender").addEventListener("focus", (e) => {
    if (e.target.value) e.target.readOnly = true;
  });
});
