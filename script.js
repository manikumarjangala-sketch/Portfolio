document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. Theme Toggle (Dark / Light Mode)
    // ==========================================
    const themeToggleBtn = document.getElementById("themeToggle");
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;

    // Check saved theme in localStorage or system preferences
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark-theme");
        if (themeIcon) {
            themeIcon.classList.replace("fa-moon", "fa-sun");
        }
    }

    if (themeToggleBtn && themeIcon) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");

            // Toggle icon class between moon and sun
            if (isDark) {
                themeIcon.classList.replace("fa-moon", "fa-sun");
                localStorage.setItem("theme", "dark");
            } else {
                themeIcon.classList.replace("fa-sun", "fa-moon");
                localStorage.setItem("theme", "light");
            }
        });
    }

    // ==========================================
    // 2. Active Link Highlighting on Scroll
    // ==========================================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const highlightActiveSection = () => {
        const scrollY = window.scrollY;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for sticky navbar height
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", highlightActiveSection);

    // ==========================================
    // 3. Contact Form Submission Handling
    // ==========================================
    const contactForm = document.querySelector("#contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = contactForm.querySelector('input[type="text"]').value.trim();
            const emailInput = contactForm.querySelector('input[type="email"]').value.trim();
            const messageInput = contactForm.querySelector("textarea").value.trim();

            if (!nameInput || !emailInput || !messageInput) {
                alert("Please fill in all required fields.");
                return;
            }

            // Simulate form submission success
            alert(`Thank you, ${nameInput}! Your message has been sent successfully.`);
            contactForm.reset();
        });
    }
    const glow = document.querySelector(".glow");

    document.addEventListener("mousemove", e => {
        glow.style.left = e.pageX - 100 + "px";
        glow.style.top = e.pageY - 100 + "px";
    });
});