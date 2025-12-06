document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("disable-close-btn");
  const promoBar = document.getElementById("promo-bar");

  if (closeBtn && promoBar) {
    closeBtn.addEventListener("click", () => {
      promoBar.style.display = "none";
    });
  }
});


  /* NAV repsponvie mobile  */
  const mainNav = document.getElementById("main-nav");
  const navToggle = document.getElementById("nav-toggle");

  if (mainNav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.dataset.open === "true";
      mainNav.dataset.open = isOpen ? "false" : "true";
      navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  }


  /* https://yootheme.com/support/question/165803 */
  /* background video controls */
  (function () {
    function initVideoControl() {
      const video = document.querySelector('main section:nth-of-type(1) video') || document.querySelector('main video');
      if (!video) return;

      // haalt de btn op
      let btn = document.querySelector('main section:nth-of-type(1) .video-toggle') || document.querySelector('.video-toggle');
      // zorgt ervoor dat de current state wordt gereflect
      function setButtonLabel(isPaused) {
        const visible = btn.querySelector('[aria-hidden]');
        if (visible) visible.textContent = isPaused ? '►' : '❚❚';
        else btn.textContent = isPaused ? '►' : '❚❚';
        btn.setAttribute('aria-pressed', String(!isPaused));
        btn.setAttribute('aria-label', isPaused ? 'Speel achtergrondvideo' : 'Pauzeer achtergrondvideo');
      }
      setButtonLabel(video.paused);

      function updateButton() {
        setButtonLabel(video.paused);
      }

      btn.addEventListener('click', () => {
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.then(() => updateButton()).catch(() => {
              // als autoplay geblocked is wordt dit goed geupdate
              updateButton();
            });
          } else {
            updateButton();
          }
        } else {
          video.pause();
          updateButton();
        }
      });

      // laat t syncen
      video.addEventListener('play', updateButton);
      video.addEventListener('pause', updateButton);

      // Als vid niet wordt geladen gooi de btn weg
      if (!video.src && video.querySelector('source') == null) {
        btn.style.display = 'none';
      }
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      initVideoControl();
    } else {
      document.addEventListener('DOMContentLoaded', initVideoControl);
    }
  })();



