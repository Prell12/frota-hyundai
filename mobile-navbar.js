class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation = this.navList.classList.contains(this.activeClass)
          ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
          : ""; // Remove animação ao fechar
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
  
      // Suporte para teclado
      this.mobileMenu.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          this.handleClick();
          e.preventDefault(); // Previne scroll ao pressionar espaço
        }
      });
    }
  
    init() {
      if (this.mobileMenu && this.navList && this.navLinks.length) {
        this.addClickEvent();
      } else {
        console.error(
          "MobileNavbar: Um ou mais elementos não foram encontrados no DOM."
        );
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
  mobileNavbar.init();
  