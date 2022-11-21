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
 
 window.addEventListener("scroll", function(){
    let currentScrollPosition = window.pageYOffset;
 
    if (currentScrollPosition > baseScrollTop){
     overlayMenu.classList.add('overlayMenuOpacity')
    } else {
     overlayMenu.classList.remove('overlayMenuOpacity')
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
    overlay.classList.add('mobileOverlayVisible')
  } else {
    mobileMenuIcon.src = hamburgerPath;
    mobileMenu.classList.remove("mobileMenuVisible");
    overlay.classList.remove('mobileOverlayVisible')
  }
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('mobileOverlayVisible');
  mobileMenu.classList.remove("mobileMenuVisible");
  mobileMenuIcon.src = hamburgerPath;
})

/*-----------------------------------------------------------------------------------*/
/*	 SCROLL TO SECTION
 /*-----------------------------------------------------------------------------------*/

 const listLinks = document.querySelectorAll('.nav__listLink');

 listLinks.forEach(item => {
  item.addEventListener('click', (event) => {

    event.preventDefault();
    let hrefAtt = item.getAttribute('href');
    let jumpToSection = document.querySelector(hrefAtt);
    let rect = jumpToSection.getBoundingClientRect();

    mobileMenuIcon.src = hamburgerPath;
    mobileMenu.classList.remove("mobileMenuVisible");
    overlay.classList.remove('mobileOverlayVisible');

    window.scrollBy(0, rect.top -100);
  })
})

/*-----------------------------------------------------------------------------------*/
/*	 NAV WIDTH
 /*-----------------------------------------------------------------------------------*/

window.addEventListener('DOMContentLoaded', () => {

  const navElement = document.querySelector('.nav');
  const headerElement = document.querySelector('.header__content');
  const headerElementWidth = headerElement.offsetWidth;

  navElement.style.width = headerElementWidth + 'px'

});

/*-----------------------------------------------------------------------------------*/
/*	 SLIDER 
 /*-----------------------------------------------------------------------------------*/

const coatLeftEl = document.querySelector('.coatArms__left');
const coatLeftElWidth = coatLeftEl.offsetWidth;
const sliderImages = document.querySelectorAll('.slider__image');
const sliderImageContainer = document.querySelector('.slider__imageContainer');
let style = getComputedStyle(sliderImageContainer);
let imagePadding = Number(style.padding.replace('px',''));
const prevButton = document.getElementById('slider__arrowLeft');
const nextButton = document.getElementById('slider__arrowRight');
const slider = document.getElementById('slider__AV54');
const circles = document.querySelectorAll('.slider__circleEmpty');

let counter = 1;

const counterStringified = () => {
  if (counter === 1) return 'circleOne';
  if (counter === 2) return 'circleTwo';
  if (counter === 3) return 'circleThree'
}

sliderImages.forEach(item => {
  item.style.width = (coatLeftElWidth - 2*imagePadding) + 'px'
})

prevButton.addEventListener('click', () => {
  slider.scrollLeft -= coatLeftElWidth;
  if (counter !== 1) counter -=1;

  circles.forEach(item => {
    if (counterStringified() === item.id) {item.classList.add('slider__circleFull')} else item.classList.remove('slider__circleFull');
  })
})

nextButton.addEventListener('click', () => {
  slider.scrollLeft += coatLeftElWidth;
  if (counter !== 3) counter +=1;

  circles.forEach(item => {
    if (counterStringified() === item.id) {item.classList.add('slider__circleFull')} else item.classList.remove('slider__circleFull');
  })
})

circles.forEach(item => {
  if (counterStringified() === item.id) {item.classList.add('slider__circleFull')} ;
})






