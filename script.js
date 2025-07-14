document.addEventListener('DOMContentLoaded', function () {
  // Check if Splide is available
  if (typeof Splide !== 'undefined') {
    new Splide('.splide', {
      type: 'loop',
      perPage: 5,
      autoplay: true,
     arrows:false,
     pagination:false,
     
      gap: 10.,
      breakpoints: {
        1360: { perPage: 4 },
        1090: { perPage: 3 },
        838: { perPage: 2 },
        700: { perPage: 1 },
      },
    }).mount();
  } else {
    console.error('Splide is not loaded');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Splide !== 'undefined') {
    new Splide('.slide-new', {
      type: 'loop',
      perPage: 3,
      arrows: false,
      pagination: false,
    arrows:true,
    gap:17,
      breakpoints: {
        1280: { perPage: 2 },
        768: { perPage: 1, gap: '1rem', height: 'auto' },
      },
    }).mount();
  } else {
    console.error('Splide not loaded.');
  }
});
