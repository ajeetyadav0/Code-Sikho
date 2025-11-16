// script.js
function updateClock() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Call once immediately
updateClock();
// Then call every second
setInterval(updateClock, 1000);
