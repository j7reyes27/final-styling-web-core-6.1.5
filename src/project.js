// function isTablet() {
//   return window.innerWidth = 1024;

// }


const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: '16px',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.addEventListener('DOMContentLoaded', (event) => {
  const showAllButton = document.querySelector('.show-button');
  const buttonText = document.querySelector('.show-button span');
  let isHidden = true;

  showAllButton.addEventListener('click', () => {
    const hiddenElements = document.querySelectorAll('.is-hidden:not(.is-showing)');

    if (isHidden) {
      hiddenElements.forEach((el) => {
        el.style.display = 'flex';
      });
      document.querySelector('.arrow').style.transform = 'rotate(180deg)';
      buttonText.textContent = "Hide";
      isHidden = false;
    } else {
      hiddenElements.forEach((el) => {
        el.style.display = 'none';
        el.classList.add('is-hidden');
      });
      document.querySelector('.arrow').style.transform = 'rotate(0deg)';
      buttonText.textContent = "Show All";
      isHidden = true;
    }
  });
});


document.addEventListener('DOMContentLoaded', (event) => {
  const showAllButton = document.querySelector('.repair-button');
  const buttonText = document.querySelector('.repair-button span');
  let isHidden = true;

  showAllButton.addEventListener('click', () => {
    const hiddenElements = document.querySelectorAll('.rhidden:not(.rshowing)');

    if(isHidden) {
      hiddenElements.forEach((el) =>{
        el.style.display = 'flex';
      });
      document.querySelector('.rarrow').style.transform = 'rotate(180deg)';
      buttonText.textContent = "Hide"
      isHidden = false;
    } else {
      hiddenElements.forEach((el) => {
        el.style.display = 'none';
        el.classList.add('is-hidden');
      });
      document.querySelector('.rarrow').style.transform = 'rotate(0deg)';
      buttonText.textContent = "Show All";
      isHidden = true;
    }
  })
})


document.addEventListener('DOMContentLoaded', () => {
  const readMoreButton = document.querySelector('.read-more-button');
  const buttonText = document.querySelector('.read-more-button span');
  let isHidden = true; 

  readMoreButton.addEventListener('click', () => {
    const hiddenElement = document.querySelector('.services_description--hidden');
    const secondHiddenElement = document.querySelector('.services__span');

    if(isHidden){
      hiddenElement.style.display = 'inline';
      secondHiddenElement.style.display = 'inline';
      document.querySelector('.read-arrow').style.transform = 'rotate(180deg)';
      buttonText.textContent = "Collapse";
      isHidden = false;

    } else {
      hiddenElement.style.display = 'none';
      document.querySelector('.read-arrow').style.transform = 'rotate(0deg)';
      buttonText.textContent = "Read More"; 
      isHidden = true;
    }
  })
})


document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.top-nav__image--burger'); 
  const rectangle = document.querySelector('.rectangle');
  const closeButton = document.querySelector('.rectangle-links__icon-x');
  const pageOverlay = document.querySelector('#pageOverlay');
  const messageButton = document.querySelectorAll('.message-button');
  const feedbackCard = document.querySelector('.feedback-container');
  const initalDisplay = rectangle.style.display;
  const closeFeeback = document.querySelector('.exit-feedback');
  const phoneButton = document.querySelectorAll('.phone-button');
  const orderCall = document.querySelector('.order-call');
  const closeOrderCall = document.querySelector('.exit-call');

  burgerButton.addEventListener('click', () => {
    rectangle.style.display = 'flex';
    rectangle.style.position = 'fixed';
    pageOverlay.style.display = 'block';
  });

    
    closeButton.addEventListener('click', () => {
      rectangle.style.display = initalDisplay;
      pageOverlay.style.display = 'none';
      rectangle.style.position = 'static';
    })

    pageOverlay.addEventListener('click', () => {
      rectangle.style.display = initalDisplay;
      pageOverlay.style.display = 'none';
      rectangle.style.position = 'static';
      feedbackCard.style.display = 'none';
      orderCall.style.display = 'none';
    })

    messageButton.forEach((button) => {
    button.addEventListener('click', () => {
      rectangle.style.display = 'none';
      pageOverlay.style.display = 'block';
      feedbackCard.style.display = 'flex';
      feedbackCard.style.position = 'fixed';
      feedbackCard.style.backgroundColor = 'none';
      pageOverlay.style.display = 'block';
      rectangle.style.position = 'relative';
    });
  });

    closeFeeback.addEventListener('click', () => {
      feedbackCard.style.display = 'none';
      pageOverlay.style.display = 'none';
      rectangle.style.display = initalDisplay;
    })

    phoneButton.forEach((button) => {
      button.addEventListener('click', () => {
        rectangle.style.display = 'none';
        pageOverlay.style.display = 'block';
        orderCall.style.display = 'flex';
        orderCall.style.position = 'fixed';
        pageOverlay.style.display = 'block';
        rectangle.style.position = 'relative';
      })
    });


    closeOrderCall.addEventListener('click', () => {
      orderCall.style.display = 'none';
      pageOverlay.style.display = 'none';
      rectangle.style.display = initalDisplay;
    })



})



// function isMobile() {
//   return window.innerWidth <= 768;
// }