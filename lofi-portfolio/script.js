// ==============================
// BACKGROUND MUSIC CONTROLS
// ==============================
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");

music.volume = 0.35;

// Try automatic playback.
music.play().catch(() => {
    // Browsers can block unmuted autoplay.
    musicText.textContent = "Play";
});

// If autoplay was blocked, the first page click starts the music.
function startMusic() {
    if (music.paused) {
        music.play().then(() => {
            musicText.textContent = "Mute";
            musicIcon.textContent = "♫";
        }).catch(() => {});
    }
}

document.addEventListener("click", startMusic, { once: true });

// Mute / unmute.
musicBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    if (music.muted) {
        music.muted = false;
        musicIcon.textContent = "♫";
        musicText.textContent = "Mute";
        music.play().catch(() => {});
    } else {
        music.muted = true;
        musicIcon.textContent = "🔇";
        musicText.textContent = "Muted";
    }
});

// ==============================
// SIMPLE SCROLL REVEAL
// ==============================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeUp .8s ease forwards";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

cards.forEach((card) => observer.observe(card));
