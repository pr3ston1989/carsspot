function initializeSwiper(galleryId) {
  new Swiper(galleryId, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 64,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

initializeSwiper('#cars');
initializeSwiper('#vans');

const carsLink = document.getElementById('cars-gallery');
const vansLink = document.getElementById('vans-gallery');
vansLink.addEventListener('click', (e) => {
  e.preventDefault();
  vansLink.classList.remove('link-not-active');
  vansLink.classList.add('link-active');
  carsLink.classList.remove('link-active');
  carsLink.classList.add('link-not-active');
  document.getElementById('cars-container').classList.add('hidden');
  document.getElementById('vans-container').classList.remove('hidden');
});

carsLink.addEventListener('click', (e) => {
  e.preventDefault();
  carsLink.classList.remove('link-not-active');
  carsLink.classList.add('link-active');
  vansLink.classList.remove('link-active');
  vansLink.classList.add('link-not-active');
  document.getElementById('vans-container').classList.add('hidden');
  document.getElementById('cars-container').classList.remove('hidden');
});

function showParagraph(num, length) {
  const para = document.getElementById(`full-${num}`);
  const fullText = para.textContent;
  const expand = document.getElementById(`para-${num}`);
  const button = expand.querySelector('a');

  para.textContent = fullText.slice(0, length) + ' [...]';

  expand.addEventListener('click', (e) => {
    e.preventDefault();
    para.classList.toggle('short');
    para.classList.toggle('full');
    if (para.classList.contains('short')) {
      para.textContent = fullText.slice(0, length) + ' [...]';
    } else {
      para.textContent = fullText;
    }
    button.textContent = button.textContent === 'Rozwiń' ? 'Zwiń' : 'Rozwiń';
    expand.querySelector('svg').classList.toggle('rotate-180');
    para.offsetHeight;
  });
}
showParagraph('1', 223);
showParagraph('2', 223);

const menuDiv = document.getElementById('mobile-menu-container');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!menuDiv.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
});

window.addEventListener('resize', () => {
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
});
