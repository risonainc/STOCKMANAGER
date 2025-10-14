
function simulateScanUPC() {
  document.getElementById('upc').value = '123456789012';
}

function checkDiscrepancy() {
  const styleA = parseInt(document.querySelector("input[placeholder='Style A Qty']").value) || 0;
  const styleB = parseInt(document.querySelector("input[placeholder='Style B Qty']").value) || 0;
  const styleC = parseInt(document.querySelector("input[placeholder='Style C Qty']").value) || 0;
  const total = styleA + styleB + styleC;
  const expected = 100;
  const result = document.getElementById('discrepancyResult');
  if (total === expected) {
    result.textContent = '✅ Match';
  } else {
    result.textContent = '❌ Mismatch - Flagged as PENDING';
  }
}

function goToScreen2() {
  document.getElementById('screen1').style.display = 'none';
  document.getElementById('screen2').style.display = 'block';
}

function goToScreen1() {
  document.getElementById('screen2').style.display = 'none';
  document.getElementById('screen1').style.display = 'block';
}

function simulateScanLocation() {
  const location = 'ZONE-AISLE-RACK-SHELF-BIN';
  const parts = location.split('-');
  const container = document.getElementById('locationDetails');
  container.innerHTML = '';
  ['Zone', 'Aisle', 'Rack', 'Shelf', 'Bin'].forEach((label, i) => {
    const div = document.createElement('div');
    div.textContent = `${label}: ${parts[i]}`;
    container.appendChild(div);
  });
}

function validateLocationQty() {
  const qty = parseInt(document.querySelector("input[placeholder='Location Qty']").value) || 0;
  const result = document.getElementById('locationResult');
  if (qty === 100) {
    result.textContent = '✅ Quantity Verified';
  } else {
    result.textContent = '❌ Quantity Mismatch';
  }
}

function printLabel() {
  const result = document.getElementById('discrepancyResult').textContent;
  if (result.includes('✅')) {
    alert('Label printed');
  } else {
    alert('Cannot print label unless VERIFIED or APPROVED');
  }
}
