/**
 * Kigali Citizens Polyclinic - Main JavaScript
 * Handles mobile menu, smooth scrolling, and other interactions
 */

/**
 * Opens the Ubuzima UDS appointment modal. The hosted plugin only injects a
 * button into [data-uds-appointment]; it does not expose UDSAppointment.open().
 * We trigger that injected .uds-book-btn programmatically.
 */
function openUdsAppointment() {
  const injected = document.querySelector('#uds-appointment-plugin-root .uds-book-btn');
  if (injected) {
    injected.click();
    return;
  }
  window.open('https://www.ubuzima.digital/', '_blank', 'noopener');
}

window.openUdsAppointment = openUdsAppointment;

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('[data-landingsite-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-landingsite-mobile-menu]');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      
      // Toggle icon between bars and times
      const icon = this.querySelector('i');
      if (icon) {
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });

    const closeMobileMenu = function() {
      mobileMenu.classList.add('hidden');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    };

    document.querySelectorAll('[data-open-uds-booking]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        if (mobileMenu.contains(el)) {
          closeMobileMenu();
        }
        openUdsAppointment();
      });
    });
  } else {
    document.querySelectorAll('[data-open-uds-booking]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        openUdsAppointment();
      });
    });
  }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector('#global-header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Header Shadow on Scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('#global-header');
  if (header) {
    if (window.scrollY > 10) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  }
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.animate-fade-in-up');
if (revealElements.length > 0 && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    revealObserver.observe(element);
  });
}

// Console message
console.log('%c Kigali Citizens Polyclinic ', 'background: #4B0082; color: #32CD32; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Website developed with care for premium healthcare ', 'color: #777777; font-size: 12px;');
