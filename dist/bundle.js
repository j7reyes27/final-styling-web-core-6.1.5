/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ (() => {

eval("// function isTablet() {\r\n//   return window.innerWidth = 1024;\r\n\r\n// }\r\n\r\n\r\nconst swiper = new Swiper('.swiper', {\r\n  // Optional parameters\r\n  slidesPerView: 'auto',\r\n  spaceBetween: '16px',\r\n\r\n  // If we need pagination\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n  },\r\n  // And if we need scrollbar\r\n  scrollbar: {\r\n    el: '.swiper-scrollbar',\r\n  },\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', (event) => {\r\n  const showAllButton = document.querySelector('.show-button');\r\n  const buttonText = document.querySelector('.show-button span');\r\n  let isHidden = true;\r\n\r\n  showAllButton.addEventListener('click', () => {\r\n    const hiddenElements = document.querySelectorAll('.is-hidden:not(.is-showing)');\r\n\r\n    if (isHidden) {\r\n      hiddenElements.forEach((el) => {\r\n        el.style.display = 'flex';\r\n      });\r\n      document.querySelector('.arrow').style.transform = 'rotate(180deg)';\r\n      buttonText.textContent = \"Hide\";\r\n      isHidden = false;\r\n    } else {\r\n      hiddenElements.forEach((el) => {\r\n        el.style.display = 'none';\r\n        el.classList.add('is-hidden');\r\n      });\r\n      document.querySelector('.arrow').style.transform = 'rotate(0deg)';\r\n      buttonText.textContent = \"Show All\";\r\n      isHidden = true;\r\n    }\r\n  });\r\n});\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', (event) => {\r\n  const showAllButton = document.querySelector('.repair-button');\r\n  const buttonText = document.querySelector('.repair-button span');\r\n  let isHidden = true;\r\n\r\n  showAllButton.addEventListener('click', () => {\r\n    const hiddenElements = document.querySelectorAll('.rhidden:not(.rshowing)');\r\n\r\n    if(isHidden) {\r\n      hiddenElements.forEach((el) =>{\r\n        el.style.display = 'flex';\r\n      });\r\n      document.querySelector('.rarrow').style.transform = 'rotate(180deg)';\r\n      buttonText.textContent = \"Hide\"\r\n      isHidden = false;\r\n    } else {\r\n      hiddenElements.forEach((el) => {\r\n        el.style.display = 'none';\r\n        el.classList.add('is-hidden');\r\n      });\r\n      document.querySelector('.rarrow').style.transform = 'rotate(0deg)';\r\n      buttonText.textContent = \"Show All\";\r\n      isHidden = true;\r\n    }\r\n  })\r\n})\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const readMoreButton = document.querySelector('.read-more-button');\r\n  const buttonText = document.querySelector('.read-more-button span');\r\n  let isHidden = true; \r\n\r\n  readMoreButton.addEventListener('click', () => {\r\n    const hiddenElement = document.querySelector('.services_description--hidden');\r\n    const secondHiddenElement = document.querySelector('.services__span');\r\n\r\n    if(isHidden){\r\n      hiddenElement.style.display = 'inline';\r\n      secondHiddenElement.style.display = 'inline';\r\n      document.querySelector('.read-arrow').style.transform = 'rotate(180deg)';\r\n      buttonText.textContent = \"Collapse\";\r\n      isHidden = false;\r\n\r\n    } else {\r\n      hiddenElement.style.display = 'none';\r\n      document.querySelector('.read-arrow').style.transform = 'rotate(0deg)';\r\n      buttonText.textContent = \"Read More\"; \r\n      isHidden = true;\r\n    }\r\n  })\r\n})\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const burgerButton = document.querySelector('.top-nav__image--burger'); \r\n  const rectangle = document.querySelector('.rectangle');\r\n  const closeButton = document.querySelector('.rectangle-links__icon-x');\r\n  const pageOverlay = document.querySelector('#pageOverlay');\r\n  const messageButton = document.querySelectorAll('.message-button');\r\n  const feedbackCard = document.querySelector('.feedback-container');\r\n  const initalDisplay = rectangle.style.display;\r\n  const closeFeeback = document.querySelector('.exit-feedback');\r\n  const phoneButton = document.querySelectorAll('.phone-button');\r\n  const orderCall = document.querySelector('.order-call');\r\n  const closeOrderCall = document.querySelector('.exit-call');\r\n\r\n  burgerButton.addEventListener('click', () => {\r\n    rectangle.style.display = 'flex';\r\n    rectangle.style.position = 'fixed';\r\n    pageOverlay.style.display = 'block';\r\n  });\r\n\r\n    \r\n    closeButton.addEventListener('click', () => {\r\n      rectangle.style.display = initalDisplay;\r\n      pageOverlay.style.display = 'none';\r\n      rectangle.style.position = 'static';\r\n    })\r\n\r\n    pageOverlay.addEventListener('click', () => {\r\n      rectangle.style.display = initalDisplay;\r\n      pageOverlay.style.display = 'none';\r\n      rectangle.style.position = 'static';\r\n      feedbackCard.style.display = 'none';\r\n      orderCall.style.display = 'none';\r\n    })\r\n\r\n    messageButton.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n      rectangle.style.display = 'none';\r\n      pageOverlay.style.display = 'block';\r\n      feedbackCard.style.display = 'flex';\r\n      feedbackCard.style.position = 'fixed';\r\n      feedbackCard.style.backgroundColor = 'none';\r\n      pageOverlay.style.display = 'block';\r\n      rectangle.style.position = 'relative';\r\n    });\r\n  });\r\n\r\n    closeFeeback.addEventListener('click', () => {\r\n      feedbackCard.style.display = 'none';\r\n      pageOverlay.style.display = 'none';\r\n      rectangle.style.display = initalDisplay;\r\n    })\r\n\r\n    phoneButton.forEach((button) => {\r\n      button.addEventListener('click', () => {\r\n        rectangle.style.display = 'none';\r\n        pageOverlay.style.display = 'block';\r\n        orderCall.style.display = 'flex';\r\n        orderCall.style.position = 'fixed';\r\n        pageOverlay.style.display = 'block';\r\n        rectangle.style.position = 'relative';\r\n      })\r\n    });\r\n\r\n\r\n    closeOrderCall.addEventListener('click', () => {\r\n      orderCall.style.display = 'none';\r\n      pageOverlay.style.display = 'none';\r\n      rectangle.style.display = initalDisplay;\r\n    })\r\n\r\n\r\n\r\n})\r\n\r\n\r\n\r\n// function isMobile() {\r\n//   return window.innerWidth <= 768;\r\n// }\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/project.js"]();
/******/ 	
/******/ })()
;