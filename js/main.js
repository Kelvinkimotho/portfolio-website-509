// main.js

// ========== DOMContentLoaded ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio website script loaded.");
  
    highlightActiveNav();
    setupFormValidation();
    enableSmoothScroll();
    enableScrollSpy();
    animateOnScroll();
  });
  
  // ========== Highlight Current Nav Link ==========
  function highlightActiveNav() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  
  // ========== Simple Bootstrap Form Validation ==========
  function setupFormValidation() {
    const forms = document.querySelectorAll('form');
  
    forms.forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert("Please fill out all required fields correctly.");
        } else {
          event.preventDefault(); // simulate sending
          alert("Thank you! Your message has been sent.");
          form.reset();
        }
  
        form.classList.add('was-validated');
      });
    });
  }
  
  // ========== Smooth Scroll for Anchor Links ==========
  function enableSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    anchorLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
  
  // ========== Enable ScrollSpy (if page has sections and nav) ==========
  function enableScrollSpy() {
    const body = document.body;
    const scrollSpyTarget = document.querySelector('body');
    const nav = document.querySelector('nav');
  
    if (scrollSpyTarget && nav) {
      new bootstrap.ScrollSpy(scrollSpyTarget, {
        target: 'nav',
        offset: 100
      });
    }
  }
  
  // ========== Animate Elements on Scroll ==========
  function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animate');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => observer.observe(el));
  }
  