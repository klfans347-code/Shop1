// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile menu drawer =====
const menuBtn = document.getElementById('menuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
menuBtn.addEventListener('click', () => {
  mobileDrawer.classList.toggle('open');
});
mobileDrawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileDrawer.classList.remove('open'));
});

// ===== Quantity selector =====
const qtyValue = document.getElementById('qtyValue');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');

function getQty() {
  return parseInt(qtyValue.value, 10) || 1;
}

qtyMinus.addEventListener('click', () => {
  const current = getQty();
  if (current > 1) qtyValue.value = current - 1;
});

qtyPlus.addEventListener('click', () => {
  const current = getQty();
  if (current < 10) qtyValue.value = current + 1;
});

// ===== Add to cart button (demo behaviour) =====
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    const qty = getQty();
    addToCartBtn.textContent = `Added ${qty} to Cart ✓`;
    setTimeout(() => {
      addToCartBtn.textContent = 'Get Yours Today';
    }, 1800);
  });
}

// ===== FAQ accordion =====
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-q');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== Sticky bottom bar visibility (hide once footer is reached) =====
const stickyBar = document.getElementById('stickyBar');
const footer = document.querySelector('.site-footer');

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    stickyBar.style.transform = entry.isIntersecting ? 'translateY(100%)' : 'translateY(0)';
  });
}, { threshold: 0.05 });

if (footer) footerObserver.observe(footer);

// ===== Scroll reveal animations =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ===== Newsletter form (demo behaviour, no backend) =====
const emailForm = document.getElementById('emailForm');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = emailForm.querySelector('input');
    input.value = '';
    input.placeholder = 'Thanks for subscribing!';
  });
}
