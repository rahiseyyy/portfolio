// ================= TYPED.JS ================= 
const typed = new Typed('.text', {
  strings: ['Designer','Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// ================= SCROLL REVEAL ================= 
ScrollReveal().reveal('.home-content h1', { delay: 200 });
ScrollReveal().reveal('.home-content h3', { delay: 400 });
ScrollReveal().reveal('.home-content p', { delay: 600 });
ScrollReveal().reveal('.social-media a', { delay: 700, interval: 200 });
ScrollReveal().reveal('.btn', { delay: 800 });
ScrollReveal().reveal('.about-img', { delay: 200 });
ScrollReveal().reveal('.about-content h2', { delay: 400 });
ScrollReveal().reveal('.about-content h3', { delay: 500 });
ScrollReveal().reveal('.about-content p', { delay: 600 });
ScrollReveal().reveal('.skills-card', { delay: 200, interval: 200 });
ScrollReveal().reveal('.project-card', { delay: 200, interval: 200 });
ScrollReveal().reveal('.journey-card', { delay: 200, interval: 200 });

// ================= IMAGE MODAL ================= 
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Get all journey card images
const journeyImages = document.querySelectorAll('.journey-card img');

// Add click event to each journey image
journeyImages.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImage.src = this.src;
  });
  img.style.cursor = 'pointer';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});
