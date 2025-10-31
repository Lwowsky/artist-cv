//video //
document.body.addEventListener('click', function(e) {
  if(e.target.closest('.thumbnail')) {
    const thumbnail = e.target.closest('.thumbnail');
    const iframe = document.querySelector('.video-display iframe');
    const title = document.querySelector('.video-title');

    iframe.src = thumbnail.dataset.video + '?autoplay=1';
    title.textContent = thumbnail.dataset.title;

    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
  }
});

//carousel//

