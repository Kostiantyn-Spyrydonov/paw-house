
export function initMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const burgerButton = document.querySelector(".burger-button");
  const closeButton = document.querySelector(".close-button");
  const menuContainer = document.querySelector(".menu-container");

  if (mobileMenu && burgerButton && closeButton) {
    const toggleMenu = () => {
      mobileMenu.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    };

    burgerButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    menuContainer.addEventListener("click", (e) => {

      const isNavLink = e.target.closest('a');
      const isTakePetBtn = e.target.closest('.menu-take-div');

      if (isNavLink || isTakePetBtn) {
        toggleMenu();
      }
    });

    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) toggleMenu();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  }
}