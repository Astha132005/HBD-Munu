window.addEventListener('load', () => {
  document.querySelectorAll('.morph').forEach(el => {
    el.style.animationPlayState = 'running';
  });
});
window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  const videos = document.querySelectorAll('video');

  const startTime = 30; // seconds
  const endTime = 104;   // seconds

  bgMusic.currentTime = startTime;

  // For mobile autoplay, unmute on first interaction
  const tryPlay = () => {
    bgMusic.muted = false;
    bgMusic.play();
  };

  // Attempt to play immediately
  tryPlay();

  // Watch for reaching the end point
  bgMusic.addEventListener('timeupdate', () => {
    if (bgMusic.currentTime >= endTime) {
      bgMusic.pause();
    }
  });

  // Pause music when any video starts
  videos.forEach(video => {
    video.addEventListener('play', () => {
      if (!bgMusic.paused) {
        bgMusic.pause();
      }
    });

    video.addEventListener('pause', () => {
      if (bgMusic.currentTime < endTime) {
        bgMusic.play();
      }
    });
  });

  // For mobile browsers that require user interaction
  document.body.addEventListener('click', tryPlay, { once: true });
  
});

document.addEventListener('DOMContentLoaded', function () {
  new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
});
