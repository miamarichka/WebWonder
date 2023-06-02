(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector('body');
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
      body.classList.toggle("is-hidden");
    });
  })();

  (() => {
    const mobileMenu = document.querySelector('.menu-container');
    const openMenuBtn = document.querySelector('.menu-open');
    const closeMenuBtn = document.querySelector('.menu-close');
    const toggleMenu = () => {
      const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      body.classList.toggle("is-hidden");
      
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      body.classList.remove("is-hidden");
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();