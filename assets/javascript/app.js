var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 1,
  pagination : false,
  gap: '10px'
});
splide.mount();

// 2nd splide
var slider = new Splide('.custom-slider', {
  type: 'loop',
  gap: '1.5rem',
  autoplay: true,
  pauseOnHover: true,
  interval: 4000,
  perPage: 1,
  // height: '488px',
  arrows: true,
  fixedWidth: '1320px',
  trimSpace: true,
  focus: 'center',
  classes: {
      pagination: 'splide__pagination top-100',
  },
  breakpoints: {
      1400: {
          fixedWidth: '1140px'
      },
      1200: {
          padding: '1rem',
          fixedWidth: '960px'
      },
      992: {
          fixedWidth: '720px'
      },
      768: {
          fixedWidth: '540px'
      },
      576: {
          gap: '0',
          fixedWidth: '100%'
      },
      680: {
          // height: '27rem',
          arrows: false
      },


  },

});
slider.mount();

//SET THIRD SPLIDE
var splide = new Splide('.custom-slide', {
  rewind: true,
  perPage: 3, 
  gap: '.70rem',
  padding: '30px',   
  fixedWidth: '280px',
  height: '200px',
  breakpoints: {
    1024: {   
      perPage: 2,  // Show 2 cards
      gap: '0.7rem',   
      padding: {
        right: '35%',   
        left: 0, 
      },
    },
    768: {  // Small screens (sm)
      perPage: 1,  // Show 1 card on mobile
    }
  },
  classes: {
    pagination: 'splide__pagination splide__pagination--ltr top-100 set-pagination',
  },
});

splide.mount();


//Fourth Splide
var splide = new Splide('.manage-splide', {
  rewind: true,
  perPage: 3, 
  arrows: false,
  drag : false,

  breakpoints: {
    1024: {   
      perPage: 2,  
      gap: '0.7rem', 
      drag: true,  
      padding: {
        right: '35%',   
        left: 0, 
      },
    },
    768: {   
      perPage: 1,
      drag: true, 
        }   
  }
});

splide.mount();

//Fifth Splide
var splide = new Splide('.five-splide', {
  rewind: true,
  perPage: 3,
  pagination: false,
  arrows: false,

  drag: false, // Disable drag by default (for large devices)

  breakpoints: {
    1024: { 
      perPage: 2, 
      drag: true,  // Enable drag for tablet (md)
    },
    768: { 
      perPage: 1, 
      drag: true,  // Enable drag for mobile (sm)
    },
    640: { 
      perPage: 1, 
      drag: true,  // Enable drag
    },
    845: { 
      perPage: 1, 
      arrows: false, 
      drag: true,  // Enable drag at this breakpoint
    }
  }
});

splide.mount();

//Faq Section Icon
function toggleIcon(button) {
    let isExpanded = button.getAttribute("aria-expanded") === "true";

    let plusIcon = button.querySelector(".icon-plus");
    let minusIcon = button.querySelector(".icon-minus");

    if (isExpanded) {
        plusIcon.classList.add("d-none");
        minusIcon.classList.remove("d-none");
    } else {
        plusIcon.classList.remove("d-none");
        minusIcon.classList.add("d-none");
    }
}

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach(function (button) {
      button.addEventListener("click", function () {
          var icon = this.querySelector(".icon");
          var plusIcon = icon.querySelector(".plus-icon");
          var minusIcon = icon.querySelector(".minus-icon");

          // Check if button is opening or closing
          setTimeout(() => {
              if (this.classList.contains("collapsed")) {
                  plusIcon.classList.remove("d-none");
                  minusIcon.classList.add("d-none");
              } else {
                  plusIcon.classList.add("d-none");
                  minusIcon.classList.remove("d-none");
              }
          }, 300); // Delay to wait for Bootstrap animation
      });
  });
});

