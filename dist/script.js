function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  }

  // Ensure midnight is displayed as 12 AM and noon as 12 PM
  if (hours === 0) {
    hours = 12;
  }

  const timeString = `${hours}:${minutes} ${ampm}`;
  document.getElementById("clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock
updateClock();
