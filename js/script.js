document.addEventListener('DOMContentLoaded', function() {
   // ===== PRELOADER =====
   const preloader = document.querySelector('.preloader');
   
   window.addEventListener('load', function() {
     preloader.classList.add('fade-out');
     setTimeout(() => {
       preloader.style.display = 'none';
     }, 500);
   });
 
   // ===== MOBILE MENU TOGGLE & HEADER SCROLL EFFECT =====
   const menuBtn = document.getElementById('menu-btn');
   const navbar = document.querySelector('.navbar');
   const header = document.querySelector('.header');

   if (menuBtn && navbar) {
     menuBtn.addEventListener('click', function() {
       navbar.classList.toggle('active');
       menuBtn.classList.toggle('fa-times');
     });

     // Close mobile menu when clicking on a link
     document.querySelectorAll('.nav-link').forEach(link => {
       link.addEventListener('click', function() {
         navbar.classList.remove('active');
         menuBtn.classList.remove('fa-times');
       });
     });
   }

   if (header) {
     window.addEventListener('scroll', function() {
       if (window.scrollY > 100) {
         header.classList.add('scrolled');
       } else {
         header.classList.remove('scrolled');
       }
     });
   }
 
   // ===== HERO SLIDER =====
   const heroSlider = new Swiper('.hero-slider', {
     loop: true,
     effect: 'fade',
     fadeEffect: {
       crossFade: true
     },
     autoplay: {
       delay: 7000,
       disableOnInteraction: false,
     },
     speed: 1000,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });
 
   // ===== TESTIMONIALS SLIDER =====
   const testimonialsSlider = new Swiper('.testimonials-slider', {
     loop: true,
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
       delay: 5000,
       disableOnInteraction: false,
     },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       992: {
         slidesPerView: 3,
       },
     },
   });
 
// Inisialisasi Client Logo Slider
const logoSlider = new Swiper('.logo-slider', {
   loop: true,
   speed: 5000, // Kecepatan scroll lebih lambat
   autoplay: {
     delay: 1, // Delay minimal untuk transisi terus menerus
     disableOnInteraction: false,
   },
   slidesPerView: 'auto', // Menyesuaikan jumlah slide dengan lebar
   spaceBetween: 30, // Jarak antar slide
   centeredSlides: true, // Slide di tengah
   freeMode: true, // Mode bebas untuk scroll lebih smooth
   grabCursor: true, // Kursor berubah saat hover
   breakpoints: {
     320: {
       spaceBetween: 15
     },
     640: {
       spaceBetween: 20
     },
     1024: {
       spaceBetween: 30
     }
   }
 });
   // ===== VIDEO PLAY BUTTON & FULLSCREEN ICON =====
   const videoWrapper = document.querySelector('.video-wrapper');
   const video = document.getElementById('about-video');
   
   if (videoWrapper && video) {
     // Cek dan tambahkan tombol play
     let playBtn = document.getElementById('playPauseBtn');
     if (!playBtn) {
       playBtn = document.createElement('button');
       playBtn.id = 'playPauseBtn';
       playBtn.className = 'video-play-btn';
       playBtn.type = 'button';
       playBtn.style.display = 'flex';
       playBtn.innerHTML = '<i class="fas fa-play"></i>';
       videoWrapper.appendChild(playBtn);
     }

     // Cek dan tambahkan tombol fullscreen
     let fullscreenBtn = document.getElementById('fullscreenBtn');
     if (!fullscreenBtn) {
       fullscreenBtn = document.createElement('button');
       fullscreenBtn.id = 'fullscreenBtn';
       fullscreenBtn.className = 'video-fullscreen-btn';
       fullscreenBtn.type = 'button';
       fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
       videoWrapper.appendChild(fullscreenBtn);
     }
     // Tambahkan agar tombol fullscreen bisa diklik di mobile
     fullscreenBtn.style.pointerEvents = 'auto';

     // Cek dan tambahkan overlay jika belum ada
     let videoOverlay = document.getElementById('videoOverlay');
     if (!videoOverlay) {
       videoOverlay = document.createElement('div');
       videoOverlay.id = 'videoOverlay';
       videoOverlay.className = 'video-overlay';
       videoWrapper.appendChild(videoOverlay);
     }

     // Cek dan tambahkan autoplay hint jika belum ada
     let autoplayHint = document.getElementById('autoplayHint');
     if (!autoplayHint) {
       autoplayHint = document.createElement('div');
       autoplayHint.id = 'autoplayHint';
       autoplayHint.className = 'autoplay-hint';
       autoplayHint.innerHTML = 'Klik untuk memulai video';
       videoWrapper.appendChild(autoplayHint);
     }
   }
 
   // ===== STATS COUNTER =====
   const statItems = document.querySelectorAll('.stat-item h3');
   
   if (statItems.length > 0) {
     statItems.forEach(stat => {
       const target = parseInt(stat.getAttribute('data-count'));
       const speed = 2000;
       const count = target / speed;
       let current = 0;
       
       const updateCount = () => {
         current += count;
         if (current < target) {
           stat.textContent = Math.floor(current);
           setTimeout(updateCount, 1);
         } else {
           stat.textContent = target;
         }
       };
       
       const observer = new IntersectionObserver((entries) => {
         if (entries[0].isIntersecting) {
           updateCount();
           observer.unobserve(stat);
         }
       });
       
       observer.observe(stat);
     });
   }
 
   // ===== BACK TO TOP BUTTON =====
   const backToTopBtn = document.querySelector('.back-to-top');
   
   window.addEventListener('scroll', function() {
     if (window.scrollY > 300) {
       backToTopBtn.classList.add('active');
     } else {
       backToTopBtn.classList.remove('active');
     }
   });
   
   backToTopBtn.addEventListener('click', function(e) {
     e.preventDefault();
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   });
 
   // ===== LIGHTGALLERY =====
   if (document.querySelector('.projects-grid')) {
     lightGallery(document.querySelector('.projects-grid'), {
       selector: '.project-item',
       download: false,
     });
   }
 
   // Inisialisasi LightGallery
   document.addEventListener('DOMContentLoaded', function() {
     if (document.querySelector('.projects .box-container')) {
       lightGallery(document.querySelector('.projects .box-container'), {
         selector: '.box',
         download: false
         // Jika ingin plugin zoom/thumbnail, pastikan sudah include plugin-nya
         // plugins: [lgZoom, lgThumbnail],
         // speed: 500
       });
     }

     // Animasi masuk box proyek (fadeInUp)
     const projectBoxes = document.querySelectorAll('.projects .box');
     projectBoxes.forEach((box, idx) => {
       box.style.opacity = 0;
       box.style.transform = 'translateY(40px)';
       setTimeout(() => {
         box.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.3,1), transform 0.7s cubic-bezier(.4,2,.3,1)';
         box.style.opacity = 1;
         box.style.transform = 'translateY(0)';
       }, 200 + idx * 120);
     });
   });
 
   // ===== CONTACT FORM SUBMISSION =====
   const contactForm = document.getElementById('contactForm');
   
   if (contactForm) {
     contactForm.addEventListener('submit', function(e) {
       e.preventDefault();
       
       // Get form values
       const formData = new FormData(contactForm);
       const data = Object.fromEntries(formData);
       
       // Here you would typically send the data to a server
       // For demonstration, we'll just show an alert
       alert(`Terima kasih ${data.nama}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`);
       
       // Reset form
       contactForm.reset();
     });
   }

   // ===== SECTION ANIMATION ON SCROLL =====
   const animatedSections = document.querySelectorAll(
     '.section, .section-header, .hero-content, .about-content, .about-media, .stats-grid, .services-grid, .projects-grid, .blogs-slider, .testimonials-slider, .contact-section, .footer'
   );
   const animateOnScroll = (entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible', 'animated', 'fadeInUp');
         observer.unobserve(entry.target);
       }
     });
   };
   const sectionObserver = new IntersectionObserver(animateOnScroll, {
     threshold: 0.15
   });
   animatedSections.forEach(section => {
     sectionObserver.observe(section);
   });

   // ===== BUTTON RIPPLE EFFECT =====
   document.querySelectorAll('.btn, .btn-primary, .btn-outline').forEach(btn => {
     btn.addEventListener('click', function(e) {
       const ripple = document.createElement('span');
       ripple.className = 'ripple';
       ripple.style.left = `${e.offsetX}px`;
       ripple.style.top = `${e.offsetY}px`;
       this.appendChild(ripple);
       setTimeout(() => ripple.remove(), 600);
     });
   });

   // ===== DARK MODE TOGGLE (OPTIONAL) =====
   // Uncomment below to add a dark mode toggle button
   /*
   const darkToggle = document.createElement('button');
   darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
   darkToggle.className = 'btn btn-outline';
   darkToggle.style.position = 'fixed';
   darkToggle.style.bottom = '2rem';
   darkToggle.style.left = '2rem';
   darkToggle.style.zIndex = 9999;
   document.body.appendChild(darkToggle);
   darkToggle.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
   });
   */

   // ===== DEBOUNCED SCROLL EVENTS FOR PERFORMANCE =====
   let scrollTimeout;
   window.addEventListener('scroll', function() {
     if (scrollTimeout) clearTimeout(scrollTimeout);
     scrollTimeout = setTimeout(() => {
       if (window.scrollY > 100) {
         header.classList.add('scrolled');
       } else {
         header.classList.remove('scrolled');
       }
       if (window.scrollY > 300) {
         backToTopBtn.classList.add('active');
       } else {
         backToTopBtn.classList.remove('active');
       }
     }, 30); // lebih responsif
   });

   // ===== HERO SECTION: FORCE FONT SIZE CONSISTENCY ON ALL DEVICES =====
   // Pastikan ukuran font hero-title dan hero-text tetap sama di mobile
   function fixHeroFontSize() {
     var heroTitle = document.querySelector('.hero-title');
     var heroText = document.querySelector('.hero-text');
     var heroBtns = document.querySelectorAll('.hero-buttons .btn, .hero-buttons .btn-primary, .hero-buttons .btn-outline');
     if (heroTitle) {
       heroTitle.style.fontSize = '4.8rem';
       heroTitle.style.lineHeight = '1.2';
       heroTitle.style.overflowWrap = 'break-word';
       heroTitle.style.wordBreak = 'break-word';
     }
     if (heroText) {
       heroText.style.fontSize = '2.1rem';
       heroText.style.lineHeight = '1.2';
       heroText.style.overflowWrap = 'break-word';
       heroText.style.wordBreak = 'break-word';
     }
     heroBtns.forEach(function(btn) {
       btn.style.fontSize = '1.8rem';
       btn.style.padding = '1.4rem 3.2rem';
       btn.style.borderRadius = '2.2rem';
       btn.style.overflowWrap = 'break-word';
       btn.style.wordBreak = 'break-word';
     });
   }
   fixHeroFontSize();
   window.addEventListener('resize', fixHeroFontSize);
 });
 
 // Function for contact form submission (used in HTML onclick)
 function sendContactForm(e) {
   e.preventDefault();
   
   // Get form values
   const form = e.target;
   const formData = new FormData(form);
   const data = Object.fromEntries(formData);
   
   // Here you would typically send the data to a server
   // For demonstration, we'll just show an alert
   alert(`Terima kasih ${data.nama}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`);
   
   // Reset form
   form.reset();
   
   return false;
 }

 /* ===== BUTTON RIPPLE CSS ===== */
 const rippleStyle = document.createElement('style');
 rippleStyle.innerHTML = `
 .ripple {
   position: absolute;
   border-radius: 50%;
   background: rgba(0,86,179,0.18);
   transform: scale(0);
   animation: ripple-effect 0.6s linear;
   pointer-events: none;
   z-index: 2;
   width: 100px;
   height: 100px;
   left: 50%;
   top: 50%;
   opacity: 0.7;
 }
 @keyframes ripple-effect {
   to {
     transform: scale(2.5);
     opacity: 0;
   }
 }
 .btn, .btn-primary, .btn-outline {
   position: relative;
   overflow: hidden;
 }
 /* ===== VIDEO BUTTONS & OVERLAY CSS ===== */
 .video-play-btn, .video-fullscreen-btn {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 20;
   background: rgba(0,0,0,0.55);
   border: none;
   border-radius: 50%;
   width: 64px;
   height: 64px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   font-size: 2.4rem;
   cursor: pointer;
   transition: background 0.2s;
   pointer-events: auto; /* pastikan tombol bisa diklik */
 }
 .video-fullscreen-btn {
   left: auto;
   right: 2.5rem;
   top: 2.5rem;
   transform: none;
   width: 44px;
   height: 44px;
   font-size: 1.6rem;
   opacity: 0.85;
 }
 .video-play-btn:hover, .video-fullscreen-btn:hover {
   background: rgba(0,86,179,0.8);
 }
 .video-overlay {
   position: absolute;
   top: 0; left: 0; right: 0; bottom: 0;
   z-index: 5;
   background: transparent;
   pointer-events: none; /* overlay tidak menghalangi klik */
 }
 .autoplay-hint {
   position: absolute;
   left: 50%; top: 60%;
   transform: translate(-50%, -50%);
   background: rgba(0,0,0,0.7);
   color: #fff;
   padding: 0.7em 1.5em;
   border-radius: 2em;
   font-size: 1.2rem;
   z-index: 12;
   display: none;
   pointer-events: none;
 }
 `;
 document.head.appendChild(rippleStyle);
 // --- AUTOPLAY FIX & PLAY BUTTON SHOW/HIDE ---
 (function() {
    const video = document.getElementById('about-video');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const autoplayHint = document.getElementById('autoplayHint');
    const videoOverlay = document.getElementById('videoOverlay');
    let autoplayTried = false;
    let hideBtnTimeout = null;

    function updatePlayPauseIcon() {
       if (!playPauseBtn || !video) return;
       playPauseBtn.querySelector('i').className = video.paused ? 'fas fa-play' : 'fas fa-pause';
    }

    function showHint(show) {
       if (!autoplayHint) return;
       autoplayHint.style.display = show ? 'flex' : 'none';
    }

    function showPlayBtn(show) {
       if (playPauseBtn) playPauseBtn.style.display = show ? 'flex' : 'none';
    }

    function tryAutoplay() {
       if (!video || autoplayTried) return;
       autoplayTried = true;
       video.volume = 0.5;
       const playPromise = video.play();
       if (playPromise !== undefined) {
          playPromise.then(() => {
             updatePlayPauseIcon();
             showHint(false);
             showPlayBtn(false);
          }).catch(() => {
             updatePlayPauseIcon();
             showHint(true); // Tampilkan hint jika autoplay gagal
             showPlayBtn(true);
          });
       } else {
          // Jika playPromise tidak tersedia, tampilkan hint
          showHint(true);
          showPlayBtn(true);
       }
    }

    // Jalankan autoplay segera saat halaman dimuat
    document.addEventListener('DOMContentLoaded', tryAutoplay);
    window.addEventListener('load', tryAutoplay);
    ['click', 'touchstart'].forEach(evt => {
       document.addEventListener(evt, tryAutoplay, { once: true });
    });

    // Set initial icon & button
    if (video && playPauseBtn) {
       updatePlayPauseIcon();
       showPlayBtn(true);
    }

    // Play/pause toggle
    if (playPauseBtn && video) {
       playPauseBtn.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation(); // pastikan event tidak bubbling ke overlay
          video.volume = 0.5;
          if (video.paused) {
             video.play();
          } else {
             video.pause();
          }
          showHint(false);
       };
       // Pastikan tombol bisa diklik
       playPauseBtn.style.pointerEvents = 'auto';
    }

    // Tambahkan event listener agar ikon tombol selalu sinkron
    if (video && playPauseBtn) {
       video.addEventListener('play', updatePlayPauseIcon);
       video.addEventListener('pause', updatePlayPauseIcon);
    }

    // Fullscreen
    if (fullscreenBtn && video) {
       fullscreenBtn.onclick = function(e) {
          e.stopPropagation();
          video.volume = 0.5;
          // Agar bisa fullscreen di mobile Safari/iOS
          if (video.requestFullscreen) {
             video.requestFullscreen();
          } else if (video.webkitEnterFullscreen) {
             video.webkitEnterFullscreen(); // khusus iOS Safari
          } else if (video.webkitRequestFullscreen) {
             video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
             video.msRequestFullscreen();
          }
       };
       // Tambahkan dukungan sentuhan untuk mobile
       fullscreenBtn.addEventListener('touchstart', function(e) {
         e.stopPropagation();
         video.volume = 0.5;
         if (video.requestFullscreen) {
            video.requestFullscreen();
         } else if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
         } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
         } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
         }
       });
    }

    // Hide play button saat video play, show saat pause
    if (video) {
       video.addEventListener('play', function() {
          showPlayBtn(false);
          showHint(false);
       });
       video.addEventListener('pause', function() {
          showPlayBtn(true);
          // Jika video belum pernah diputar otomatis, tampilkan hint
          if (video.currentTime === 0) showHint(true);
       });
       video.loop = false;
       video.onended = function() {
          updatePlayPauseIcon();
          showPlayBtn(true);
          showHint(true);
       };
    }

    // Overlay hanya untuk menampilkan tombol play sementara
    if (videoOverlay && playPauseBtn) {
       function showBtnTemporarily(e) {
          // Jangan trigger jika klik pada tombol play/pause
          if (e && (e.target === playPauseBtn || playPauseBtn.contains(e.target))) return;
          showPlayBtn(true);
          if (hideBtnTimeout) clearTimeout(hideBtnTimeout);
          hideBtnTimeout = setTimeout(function() {
             if (!video.paused) showPlayBtn(false);
          }, 2000);
       }
       video.addEventListener('touchstart', showBtnTemporarily);
       video.addEventListener('click', showBtnTemporarily);
       videoOverlay.addEventListener('touchstart', showBtnTemporarily);
       videoOverlay.addEventListener('click', showBtnTemporarily);
    }
 })();
 // --- END AUTOPLAY FIX & PLAY BUTTON SHOW/HIDE ---
 // Inisialisasi AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});
  AOS.init({
    duration: 800,          // Durasi animasi
    easing: 'ease-in-out',  // Jenis easing
    once: true,             // Hanya animasi sekali
    offset: 100,            // Mulai animasi sedikit lebih awal
    delay: 100,             // Delay default antara item
  });
  if (window.innerWidth < 768) {
    AOS.init({
      disable: true // Nonaktifkan di mobile jika perlu
    });
  }
