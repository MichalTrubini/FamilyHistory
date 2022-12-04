/*-----------------------------------------------------------------------------------*/
/*	 PARALLAX
 /*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
  $("#parallax .parallax-layer").parallax({
    mouseport: $("#over,.over"),
    xorigin: 0,
    yorigin: 0,
  });

  $(".scrollto").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
});

/*-----------------------------------------------------------------------------------*/
/*	 MENU OVERLAY
 /*-----------------------------------------------------------------------------------*/

const overlayMenu = document.getElementById("overlayMenu");
let baseScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > baseScrollTop) {
    overlayMenu.classList.add("overlayMenuOpacity");
  } else {
    overlayMenu.classList.remove("overlayMenuOpacity");
  }
});

/*-----------------------------------------------------------------------------------*/
/*	 MOBILE MENU
 /*-----------------------------------------------------------------------------------*/

const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerPath = "assets/images/icon-hamburger.svg";
const closePath = "assets/images/icon-close.svg";
const overlay = document.getElementById("mobileOverlay");

mobileMenuIcon.addEventListener("click", () => {
  if (mobileMenuIcon.getAttribute("src") === hamburgerPath) {
    mobileMenuIcon.src = closePath;
    mobileMenu.classList.add("mobileMenuVisible");
    overlay.classList.add("mobileOverlayVisible");
  } else {
    mobileMenuIcon.src = hamburgerPath;
    mobileMenu.classList.remove("mobileMenuVisible");
    overlay.classList.remove("mobileOverlayVisible");
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("mobileOverlayVisible");
  mobileMenu.classList.remove("mobileMenuVisible");
  mobileMenuIcon.src = hamburgerPath;
});

/*-----------------------------------------------------------------------------------*/
/*	 SCROLL TO SECTION
 /*-----------------------------------------------------------------------------------*/

const listLinks = document.querySelectorAll(".jumpToSection");

listLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    let hrefAtt = item.getAttribute("href");
    let jumpToSection = document.querySelector(hrefAtt);
    let rect = jumpToSection.getBoundingClientRect();

    mobileMenuIcon.src = hamburgerPath;
    mobileMenu.classList.remove("mobileMenuVisible");
    overlay.classList.remove("mobileOverlayVisible");

    window.scrollBy(0, rect.top - 100);
  });
});

/*-----------------------------------------------------------------------------------*/
/*	 NAV WIDTH
 /*-----------------------------------------------------------------------------------*/

window.addEventListener("DOMContentLoaded", () => {
  const navElement = document.querySelector(".nav");
  const headerElement = document.querySelector(".header__content");
  const headerElementWidth = headerElement.offsetWidth;

  navElement.style.width = headerElementWidth + "px";
});

/*-----------------------------------------------------------------------------------*/
/*	 SLIDER 
 /*-----------------------------------------------------------------------------------*/

const coatLeftEl = document.querySelector(".coatArms__left");
const coatLeftElWidth = coatLeftEl.offsetWidth;
const sliderImages = document.querySelectorAll(".slider__image");
const sliderImageContainer = document.querySelector(".slider__imageContainer");
let style = getComputedStyle(sliderImageContainer);
let imagePadding = Number(style.padding.replace("px", ""));
const prevButton = document.getElementById("slider__arrowLeft");
const nextButton = document.getElementById("slider__arrowRight");
const slider = document.getElementById("slider__AV54");
const circles = document.querySelectorAll(".slider__circleEmpty");

let counter = 1;

const counterStringified = () => {
  if (counter === 1) return "circleOne";
  if (counter === 2) return "circleTwo";
  if (counter === 3) return "circleThree";
};

sliderImages.forEach((item) => {
  item.style.width = coatLeftElWidth - 2 * imagePadding + "px";
});

prevButton.addEventListener("click", () => {
  slider.scrollLeft -= coatLeftElWidth;
  if (counter !== 1) counter -= 1;

  circles.forEach((item) => {
    if (counterStringified() === item.id) {
      item.classList.add("slider__circleFull");
    } else item.classList.remove("slider__circleFull");
  });
});

nextButton.addEventListener("click", () => {
  slider.scrollLeft += coatLeftElWidth;
  if (counter !== 3) counter += 1;

  circles.forEach((item) => {
    if (counterStringified() === item.id) {
      item.classList.add("slider__circleFull");
    } else item.classList.remove("slider__circleFull");
  });
});

circles.forEach((item) => {
  if (counterStringified() === item.id) {
    item.classList.add("slider__circleFull");
  }
});

/*-----------------------------------------------------------------------------------*/
/*	 FORM VALIDATION 
 /*-----------------------------------------------------------------------------------*/

const formButton = document.getElementById("buttonFormSubmit");
const inputName = document.getElementById("input__name");
const inputSurname = document.getElementById("input__surname");
const inputEmail = document.getElementById("input__email");
const inputTextArea = document.getElementById("input__textArea");

const inputErrorName = document.getElementById("input__errorName");
const inputErrorNSurname = document.getElementById("input__errorSurname");
const inputErrorEmailEmpty = document.getElementById("input__errorEmailEmpty");
const inputErrorEmailFormat = document.getElementById("input__errorEmailFormat");
const inputErrorTextArea = document.getElementById("input__errorTextArea");

const regex = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

formButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputName.value.trim().length === 0) return inputErrorName.classList.add("input__errorNameVisible");
  if (inputSurname.value.trim().length === 0) return inputErrorNSurname.classList.add("input__errorNameVisible");
  if (inputEmail.value.trim().length === 0) return inputErrorEmailEmpty.classList.add("input__errorNameVisible");
  if (regex.test(inputEmail.value) === false) return inputErrorEmailFormat.classList.add("input__errorNameVisible");
  if (inputTextArea.value.trim().length === 0) return inputErrorTextArea.classList.add("input__errorNameVisible");
});

inputName.addEventListener("click", () => {
  inputErrorName.classList.remove("input__errorNameVisible");
});

inputSurname.addEventListener("click", () => {
  inputErrorNSurname.classList.remove("input__errorNameVisible");
});

inputEmail.addEventListener("click", () => {
  inputErrorEmailEmpty.classList.remove("input__errorNameVisible");
  inputErrorEmailFormat.classList.remove("input__errorNameVisible");
});

inputTextArea.addEventListener("click", () => {
  inputErrorTextArea.classList.remove("input__errorNameVisible");
});

/*-----------------------------------------------------------------------------------*/
/*	INFINITE LOOP SLIDER
 /*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
  $(".writtenAboutUs__content").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});