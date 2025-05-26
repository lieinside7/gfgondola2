// Nonaktifkan klik gambar project (jika sebelumnya ada lightbox/modal)
document.querySelectorAll('.project-image').forEach(img => {
  img.onclick = e => {
    e.preventDefault();
    return false;
  };
});

// Tombol open-folder-btn: tampilkan tooltip/pesan
document.querySelectorAll('.open-folder-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Silakan buka folder portofolio di komputer Anda untuk melihat semua foto.');
  });
});
