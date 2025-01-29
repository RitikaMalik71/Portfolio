// Get the dark mode toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Check for saved dark mode preference in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  document.querySelector(".navbar").classList.add("dark-mode");
  document.querySelector(".navbar-collapse").classList.add("dark-mode"); // ✅ Ensure dropdown gets dark mode
  darkModeToggle.textContent = "🌞"; // Show sun icon for light mode
  localStorage.setItem("darkMode", "enabled");
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  document.querySelector(".navbar").classList.remove("dark-mode");
  document.querySelector(".navbar-collapse").classList.remove("dark-mode"); // ✅ Remove dark mode from dropdown
  darkModeToggle.textContent = "🌙"; // Show moon icon for dark mode
  localStorage.setItem("darkMode", "disabled");
}
