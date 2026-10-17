const typingElement = document.getElementById("typing");

const words = [
    "a Web Developer",
    "a Tech Enthusiast",
    "an Electrnic"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseAfterTyping = 1500;

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Remove one character
        charIndex--;
    } else {
        // Add one character
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Pause after completing a word
    if (!isDeleting && charIndex === currentWord.length) {
        delay = pauseAfterTyping;
        isDeleting = true;
    }

    // Move to the next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

// Start typing animation
if (typingElement) {
    typeEffect();
}


/* =========================================
   2. DARK MODE TOGGLE
========================================= */

const toggleButton = document.getElementById("toggleMode");

if (toggleButton) {
    toggleButton.addEventListener("click", function () {

        // Toggle between dark and light themes
        document.body.classList.toggle("light-mode");

        // Update button text
        if (document.body.classList.contains("light-mode")) {
            toggleButton.textContent = "Toggle Dark Mode";
        } else {
            toggleButton.textContent = "Toggle Light Mode";
        }

    });
}


/* =========================================
   3. NAVIGATION LINK SMOOTH SCROLL
========================================= */

const navigationLinks = document.querySelectorAll('.nav-bar a[href^="#"]');

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
});