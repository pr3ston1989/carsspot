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

function expandParagraph(num) {
  const preview = document.getElementById(`preview-${num}`);
  const full = document.getElementById(`full-${num}`);
  const expand = document.getElementById(`para-${num}`);
  expand.addEventListener('click', (e) => {
    e.preventDefault();
    if (full.classList.contains('hidden')) {
      full.classList.remove('hidden');
      preview.classList.add('hidden');
      expand.querySelector('a').textContent = 'Zwiń';
      expand.querySelector('img').classList.add('rotate-180');
    } else {
      full.classList.add('hidden');
      preview.classList.remove('hidden');
      expand.querySelector('a').textContent = 'Rozwiń';
      expand.querySelector('img').classList.remove('rotate-180');
    }
  });
}

expandParagraph('1');
expandParagraph('2');

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(mobileMenu.className);
  mobileMenu.classList.toggle('hidden');
});
