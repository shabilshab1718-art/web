
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}
const topBtn = document.getElementById("topBtn");
if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
const reviews = [
    {
        name: "Priya Menon",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        comment: "Great experience! Highly recommended for professional IT services."
    },
    {
        name: "Vishnu Raj",
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
        comment: "Excellent communication and timely completion of the work."
    },
    {
        name: "Sneha Thomas",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 4,
        comment: "Good service and friendly staff. Really happy with the experience."
    }
];

const container = document.getElementById("reviewsContainer");

if (container) {
    reviews.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card";

        const photo = document.createElement("img");
        photo.src = review.photo;
        photo.alt = review.name;
        photo.className = "review-photo";
        photo.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = review.name;

        const stars = document.createElement("div");
        stars.className = "review-stars";
        stars.textContent =
            "★".repeat(review.rating) +
            "☆".repeat(5 - review.rating);
        const comment = document.createElement("p");
        comment.textContent = review.comment;
        card.appendChild(photo);
        card.appendChild(name);
        card.appendChild(stars);
        card.appendChild(comment);

        container.appendChild(card);
    });
}
const readMoreBtn = document.getElementById("readMoreBtn");
const aboutText = document.getElementById("aboutText");
if (readMoreBtn && aboutText) {
    readMoreBtn.addEventListener("click", () => {
        aboutText.classList.toggle("expanded");
        if (aboutText.classList.contains("expanded")) {
            readMoreBtn.textContent = "Read Less";
        } else {
            readMoreBtn.textContent = "Read More";
        }
    });
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        alert("Thank you! Your message has been submitted successfully.");
        contactForm.reset();
    });
}
