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



