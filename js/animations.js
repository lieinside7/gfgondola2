// Inisialisasi AOS dengan pengaturan yang lebih baik
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 120,
  delay: 100,
  mirror: false
});

// Nonaktifkan di mobile jika perlu
if (window.innerWidth < 768) {
  AOS.init({
    disable: 'mobile'
  });
}

// Initialize ScrollReveal
ScrollReveal().reveal('.animate-item', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  interval: 100,
  reset: true
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hover effect for service boxes
const serviceBoxes = document.querySelectorAll('.services .box');
serviceBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.classList.add('hovered');
  });
  
  box.addEventListener('mouseleave', () => {
    box.classList.remove('hovered');
  });
});

// Lazy loading for images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    // For now, we'll just show a success message
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    
    // Reset form
    this.reset();
    
    // You can add AJAX submission here if needed
    /*
    fetch('your-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      alert('Message sent successfully!');
      contactForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    });
    */
  });
}

// Section fade-in on scroll (smooth & professional)
document.querySelectorAll('.section, .section-header, .footer, .about, .services, .projects, .blogs, .contact-section').forEach(section => {
  section.classList.remove('visible');
});
const sectionFadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.section, .section-header, .footer, .about, .services, .projects, .blogs, .contact-section').forEach(section => {
  sectionFadeObserver.observe(section);
});