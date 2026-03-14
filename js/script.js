// Theme handling keeps the site in light or dark mode based on stored preference or OS setting.
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const nav = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = theme => {
  if (!theme) return;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

const initTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) {
    applyTheme(stored);
    return;
  }
  applyTheme(prefersDark ? 'dark' : 'light');
};

initTheme();

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// Mobile navigation helper keeps the links accessible on small screens.
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Reveal sections as they scroll into view.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-revealed');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('scroll-reveal');
  revealObserver.observe(section);
});

const statElements = document.querySelectorAll('.stat');
const animateStatValue = stat => {
  const target = Number(stat.dataset.target) || 0;
  const suffix = stat.dataset.suffix || "";
  let current = 0;
  const step = Math.max(1, Math.round(target / 120));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      stat.textContent = target + suffix;
      clearInterval(interval);
      return;
    }
    stat.textContent = current + suffix;
  }, 15);
};

const statObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    animateStatValue(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.4 });

statElements.forEach(stat => statObserver.observe(stat));

const heroNewsText = document.getElementById('hero-news-text');
const heroNewsItems = [
  'Chapel devotion starts at 7:15am with students leading worship.',
  'Admissions tours for 2026 close in two weeks - secure your spot.',
  'After-school clubs celebrate STEAM, soccer, and choir meetups today.'
];
let heroNewsIndex = 0;
const rotateHeroNews = () => {
  if (!heroNewsText) return;
  heroNewsText.textContent = heroNewsItems[heroNewsIndex];
  heroNewsIndex = (heroNewsIndex + 1) % heroNewsItems.length;
};
if (heroNewsText) {
  rotateHeroNews();
  setInterval(rotateHeroNews, 4500);
}
const heroCrest = document.querySelector('.hero__crest');
if (heroCrest) {
  setTimeout(() => heroCrest.classList.add('hero__crest--visible'), 650);
}

const testimonials = [
  {
    text: 'AGC Academy has made academic progress exciting for our first grader while keeping Christian values at the heart of the classroom.',
    name: 'Jane Mwangi',
    role: 'Mother of Grace, Grade 1'
  },
  {
    text: 'The daycare team knows every child and keeps us updated with photos and highlights, so our family feels connected even during busy weeks.',
    name: 'Peter and Annette Kiplagat',
    role: 'Parents of Little Light Care'
  },
  {
    text: 'Discipline, prayer, and modern learning blend beautifully. We see leadership rippling through daily assemblies and after-school clubs.',
    name: 'Samuel & Faith Ouma',
    role: 'Parents of Grade 4 and 6 pupils'
  }
];

const testimonialText = document.querySelector('.testimonial-text');
const testimonialName = document.querySelector('.testimonial-name');
const testimonialRole = document.querySelector('.testimonial-role');
const testimonialControls = document.getElementById('testimonial-controls');
let testimonialIndex = 0;
let testimonialTimer;

const renderTestimonial = idx => {
  const entry = testimonials[idx];
  if (!entry || !testimonialText || !testimonialName || !testimonialRole) return;
  testimonialText.textContent = entry.text;
  testimonialName.textContent = entry.name;
  testimonialRole.textContent = entry.role;
  testimonialControls?.querySelectorAll('.testimonial-dot').forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === idx);
  });
};

const setTestimonial = idx => {
  testimonialIndex = idx;
  renderTestimonial(idx);
};

const buildTestimonialDots = () => {
  if (!testimonialControls || !testimonials.length) return;
  testimonialControls.innerHTML = '';
  testimonials.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'testimonial-dot';
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      setTestimonial(idx);
      restartTestimonialRotation();
    });
    testimonialControls.appendChild(dot);
  });
};

const restartTestimonialRotation = () => {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    const next = (testimonialIndex + 1) % testimonials.length;
    setTestimonial(next);
  }, 7000);
};

if (testimonialText && testimonialName && testimonialRole && testimonials.length) {
  buildTestimonialDots();
  renderTestimonial(0);
  restartTestimonialRotation();
}

// Elevate the navbar and show a back-to-top button once we scroll a bit.
window.addEventListener('scroll', () => {
  nav?.classList.toggle('nav--elevated', window.scrollY > 40);
  backToTop?.classList.toggle('visible', window.scrollY > 600);
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
