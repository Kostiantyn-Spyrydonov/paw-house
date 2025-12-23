export function initMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const burgerButton = document.querySelector(".burger-button");
  const closeButton = document.querySelector(".close-button");

  if (!mobileMenu || !burgerButton || !closeButton) return;

  const toggleMenu = () => {
    mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  };

  burgerButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.closest('a') || e.target === mobileMenu) {
      if (mobileMenu.classList.contains("is-open")) {
        toggleMenu();
      }
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      toggleMenu();
    }
  });
}