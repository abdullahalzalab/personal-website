const heroText = document.querySelector('#hero p');
 // Array of titles to rotate through
 const titles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Tech Innovator"
];
let titleIndex = 0;      // Which title we're showing
let charIndex = 0;       // Which character we're typing
let isDeleting = false;  // Are we erasing or typing?

function typeWriter() {
    const currentTitle = titles[titleIndex];
    if(isDeleting) {
        // Remove one character
        heroText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        heroText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    let speed = 200;
    if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2000;
        isDeleting = true;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
    }
    setTimeout(typeWriter, speed)
}
typeWriter();
// Scroll to top on page load/refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
