// Enhanced AOS initialization
AOS.init({
  duration: 800,
  easing: 'ease-in-out-quart',
  once: true,
  offset: 120,
  mirror: false
});

// Mobile detection for AOS
if (window.innerWidth < 768) {
  AOS.init({
    disable: true
  });
}

// Smoother scroll reveal
ScrollReveal().reveal('.animate-item', {
  delay: 150,
  distance: '30px',
  origin: 'bottom',
  interval: 100,
  easing: 'ease-in-out',
  reset: false
});

// Improved header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll <= 0) {
    header.classList.remove('scrolled');
    return;
  }
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    header.classList.add('scrolled', 'header-hide');
  } else {
    // Scrolling up
    header.classList.add('scrolled');
    header.classList.remove('header-hide');
  }
  
  lastScroll = currentScroll;
});

// Enhanced hover effects
const serviceBoxes = document.querySelectorAll('.service-card');
serviceBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-8px)';
    box.style.boxShadow = '0 10px 20px rgba(0, 86, 179, 0.15)';
  });
  
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 5px 15px rgba(0, 86, 179, 0.1)';
  });
});

// Better lazy loading
const lazyLoad = (targets) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.classList.add('fade-in');
        observer.unobserve(img);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '200px'
  });

  targets.forEach(target => io.observe(target));
};

lazyLoad(document.querySelectorAll('img[loading="lazy"]'));

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

// Animasi masuk untuk client cards (dengan delay bertingkat agar rata dan smooth)
const clientCards = document.querySelectorAll('.client-card');
clientCards.forEach(card => {
  card.classList.remove('visible');
});
const clientCardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Tambahkan delay bertingkat agar animasi rata dan seragam
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 120);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });
clientCards.forEach(card => {
  clientCardObserver.observe(card);
});