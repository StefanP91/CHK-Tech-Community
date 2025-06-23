// navbar color change on scroll
const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled'); 
  }

  else {
    navbar.classList.remove('scrolled'); 
  }
});

// Scroll into section
function scrollInto (id){
  const section = document.getElementById(id)

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

// NAVBAR NUMBER INCREMENT ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const applicationsNumberElement = document.querySelector(".applications-number");

    if (applicationsNumberElement) {
        animateCounter(applicationsNumberElement, 0, 549, 2000); // Animate from 0 to 549 in 2 seconds
    }
});

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); 
        const currentValue = Math.floor(progress * (end - start) + start);

        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Waiting list form


