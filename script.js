// Typing effect
const typedText = document.getElementById("typed");
const roles = ["Web Developer", "Designer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let currentRole = roles[index];

function typeEffect() {
  if (charIndex < currentRole.length) {
    typedText.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % roles.length;
    currentRole = roles[index];
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
});
