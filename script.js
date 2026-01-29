/* ============================================
   AUTO-PERFEKT MILER Q-SERVICE
   JavaScript
   ============================================ */

// ============================================
// MENU HAMBURGER (MOBILE)
// ============================================

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Zamknij menu po kliknięciu na link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================
// FADE IN ANIMATION ON SCROLL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ============================================
// CONTACT FORM
// ============================================

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const phone = formData.get("phone");

  // Tutaj można dodać wysyłanie formularza przez AJAX
  // Na razie pokazujemy komunikat

  alert(
    `Dziękujemy za wiadomość, ${name}!\n\nOdezwiemy się do Ciebie pod numer ${phone} najszybciej jak to możliwe.`,
  );

  this.reset();
});

// ============================================
// LAZY LOADING IMAGES (optional enhancement)
// ============================================

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}
