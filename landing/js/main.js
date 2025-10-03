// ================================
// JavaScript Principal
// ================================

document.addEventListener("DOMContentLoaded", function () {
  // ================================
  // Navegación Mobile
  // ================================
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarMobile = document.getElementById("navbarMobile");

  if (navbarToggle && navbarMobile) {
    navbarToggle.addEventListener("click", function () {
      navbarToggle.classList.toggle("active");
      navbarMobile.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = navbarMobile.querySelectorAll(".navbar-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navbarToggle.classList.remove("active");
        navbarMobile.classList.remove("active");
      });
    });
  }

  // ================================
  // Navegación con scroll suave
  // ================================
  const navLinks = document.querySelectorAll(".navbar-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remover clase active de todos los links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Agregar clase active al link clickeado
      this.classList.add("active");

      // Scroll suave a la sección
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ================================
  // Header con fondo al hacer scroll
  // ================================
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
    } else {
      header.style.boxShadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    }
  });

  // ================================
  // Actualizar link activo según scroll
  // ================================
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ================================
  // Scroll Reveal Animation
  // ================================
  const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) *
        (percentageScroll / 100)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("active");
  };

  const handleScrollAnimation = () => {
    scrollRevealElements.forEach((el) => {
      if (elementInView(el, 80)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Trigger inicial
  handleScrollAnimation();

  // ================================
  // Validación y envío del formulario
  // ================================
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Reset de errores previos
      const errors = document.querySelectorAll(".form-error");
      errors.forEach((error) => error.classList.remove("active"));

      // Validación básica
      let isValid = true;

      // Validar nombre
      const nombre = document.getElementById("nombre");
      if (nombre.value.trim() === "") {
        document.getElementById("nombreError").classList.add("active");
        isValid = false;
      }

      // Validar email
      const email = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        document.getElementById("emailError").classList.add("active");
        isValid = false;
      }

      // Validar asunto
      const asunto = document.getElementById("asunto");
      if (asunto.value.trim() === "") {
        document.getElementById("asuntoError").classList.add("active");
        isValid = false;
      }

      // Validar mensaje
      const mensaje = document.getElementById("mensaje");
      if (mensaje.value.trim() === "") {
        document.getElementById("mensajeError").classList.add("active");
        isValid = false;
      }

      // Si todo es válido, mostrar mensaje de éxito
      if (isValid) {
        // Aquí iría la lógica de envío real (AJAX, etc.)
        console.log("Formulario válido:", {
          nombre: nombre.value,
          email: email.value,
          asunto: asunto.value,
          mensaje: mensaje.value,
        });

        // Mostrar mensaje de éxito
        const formSuccess = document.getElementById("formSuccess");
        formSuccess.classList.add("active");

        // Limpiar formulario
        contactForm.reset();

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          formSuccess.classList.remove("active");
        }, 5000);
      }
    });
  }

  // ================================
  // Animación de contadores (opcional)
  // ================================
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  };

  // ================================
  // Prevenir transición al cargar
  // ================================
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);
});
