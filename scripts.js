/* =====================================================
   Isaiah Evans — WEB140 Portfolio
   script.js
   ===================================================== */


/* -----------------------------------------------------
   1. INTERACTIVE BUTTON  (Part 5 requirement)
   Clicking the button changes the text on the page.
   No alert() is used.
   ----------------------------------------------------- */

const welcomeButton = document.querySelector("#welcomeButton");
const message = document.querySelector("#message");

const facts = [
    "Thanks for visiting my portfolio! I'm glad you're here.",
    "I run a car photography and videography business called Streamline Studios.",
    "I'm transferring to UNC Charlotte to study Computer Science.",
    "I hold four IT certificates from CPCC — and I'm working on more.",
    "Editing photos taught me more about color and layout than any tutorial did.",
    "This page is hand-coded. No templates, no site builder.",
    "That's the whole list — click again to start over."
];

let factIndex = 0;

welcomeButton.addEventListener("click", function () {
    message.textContent = facts[factIndex];

    // Move to the next fact, looping back to the start at the end
    factIndex = (factIndex + 1) % facts.length;

    // Change the button text after the first click
    welcomeButton.textContent = "Tell Me More";

    // Small pulse so the change is obvious
    message.style.opacity = "0";
    setTimeout(function () {
        message.style.transition = "opacity 0.35s ease";
        message.style.opacity = "1";
    }, 40);
});


/* -----------------------------------------------------
   2. TYPING EFFECT IN THE HERO  (creative feature)
   ----------------------------------------------------- */

const typedRole = document.querySelector("#typedRole");

const roles = [
    "Web Development Student",
    "Front-End Developer in Training",
    "Automotive Photographer",
    "Future UNC Charlotte CS Major"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const current = roles[roleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typedRole.textContent = current.substring(0, charIndex);

    let delay = isDeleting ? 40 : 85;

    if (!isDeleting && charIndex === current.length) {
        delay = 1800;              // pause on the full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
    }

    setTimeout(typeLoop, delay);
}

typeLoop();


/* -----------------------------------------------------
   3. LIGHT / DARK THEME TOGGLE  (creative feature)
   The choice is remembered in the browser.
   ----------------------------------------------------- */

const themeToggle = document.querySelector("#themeToggle");

function applyTheme(theme) {
    if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.textContent = "Dark";
    } else {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "Light";
    }
}

// Load a previously saved theme, if there is one
let savedTheme = "dark";
try {
    savedTheme = localStorage.getItem("portfolio-theme") || "dark";
} catch (error) {
    savedTheme = "dark";
}
applyTheme(savedTheme);

themeToggle.addEventListener("click", function () {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const nextTheme = isLight ? "dark" : "light";

    applyTheme(nextTheme);

    try {
        localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
        // Storage may be blocked — the toggle still works for this visit.
    }
});


/* -----------------------------------------------------
   4. SCROLL REVEAL + ANIMATED SKILL BARS
   ----------------------------------------------------- */

const revealSections = document.querySelectorAll(".reveal");

function fillSkillBars() {
    const bars = document.querySelectorAll(".bar-fill");
    bars.forEach(function (bar) {
        bar.style.width = bar.dataset.level + "%";
    });
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                if (entry.target.id === "skills") {
                    fillSkillBars();
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealSections.forEach(function (section) {
        observer.observe(section);
    });
} else {
    // Fallback for older browsers: show everything right away
    revealSections.forEach(function (section) {
        section.classList.add("visible");
    });
    fillSkillBars();
}


/* -----------------------------------------------------
   5. HIGHLIGHT THE ACTIVE NAVIGATION LINK
   ----------------------------------------------------- */

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function () {
    let currentId = "";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 140) {
            currentId = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentId) {
            link.classList.add("active");
        }
    });
});


/* -----------------------------------------------------
   6. KEEP THE FOOTER YEAR CURRENT
   ----------------------------------------------------- */

document.querySelector("#year").textContent = new Date().getFullYear();
