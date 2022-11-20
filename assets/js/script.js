document.documentElement.className = "js";

function show(div) {
  document.getElementById("content-1").style.display = "none";
  document.getElementById("content-2").style.display = "none";

  document.getElementById("kralovska").src = "assets/images/icon11.png";
  document.getElementById("lud").src = "assets/images/icon21.png";

  if (div == "1") {
    document.getElementById("kralovska").src = "assets/images/icon1.png";
  }
  if (div == "2") {
    document.getElementById("lud").src = "assets/images/icon2.png";
  }
  document.getElementById("content-" + div).style.display = "block";
}

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

  $(".kwicks").kwicks({
    maxSize: 250,
    behavior: "menu",
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
const listLinks = document.querySelectorAll('.nav__listLink');

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

listLinks.forEach(item => {
  item.addEventListener('click', (event) => {

    event.preventDefault();
    let hrefAtt = item.getAttribute('href');
    let jumpToSection = document.querySelector(hrefAtt)
    let rect = jumpToSection.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    console.log(jumpToSection)
    mobileMenuIcon.src = hamburgerPath;
    mobileMenu.classList.remove("mobileMenuVisible");
    overlay.classList.remove('mobileOverlayVisible');

    window.scrollBy(0, rect.top);
  })
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('mobileOverlayVisible');
  mobileMenu.classList.remove("mobileMenuVisible");
  mobileMenuIcon.src = hamburgerPath;
})


/*-----------------------------------------------------------------------------------*/
/*	 TESTIMONIAL 
 /*-----------------------------------------------------------------------------------*/

$("#testimonial").owlCarousel({
  autoPlay: true,
  stopOnHover: true,
  navigation: false,
  paginationSpeed: 1000,
  goToFirstSpeed: 2000,
  singleItem: true,
  autoHeight: true,
  transitionStyle: "fade",
});

/*-----------------------------------------------------------------------------------*/
/*	CLIENTS SLIDER
 /*-----------------------------------------------------------------------------------*/
$("#clients").owlCarousel({
  autoPlay: true,
  stopOnHover: true,
  navigation: false,
  paginationSpeed: 1000,
  goToFirstSpeed: 2000,
  singleItem: false,
  autoHeight: true,
  transitionStyle: "fade",
});

/*-----------------------------------------------------------------------------------*/
/*	LIQUID SLIDER
 /*-----------------------------------------------------------------------------------*/
$("#slider-1").liquidSlider({
  continuous: false,
  slideEaseFunction: "easeInOutCubic",
});
$("#slider-2").liquidSlider({
  continuous: false,
  slideEaseFunction: "easeInOutCubic",
  hoverArrows: false,
});
$("#slider-3").liquidSlider({
  continuous: false,
  slideEaseDuration: 500,
  slideEaseFunction: "easeInOutCubic",
  hoverArrows: false,
});
$("#slider-4").liquidSlider({
  continuous: false,
  slideEaseDuration: 500,
  slideEaseFunction: "easeInOutCubic",
});
$("#slider-5").liquidSlider({
  continuous: false,
  slideEaseDuration: 500,
  slideEaseFunction: "easeInOutCubic",
});
var api = $.data($("#slider-1")[0], "liquidSlider");
var api4 = $.data($("#slider-4")[0], "liquidSlider");
$(".prev-link").on("click", function () {
  api4.setNextPanel(0);
  api4.updateClass($(this));
});
$(".next-link").on("click", function () {
  api4.setNextPanel(1);
  api4.updateClass($(this));
});
$(".dots li:nth-child(1) a").addClass("ls-current");

function activateDots(id, t) {
  api.setNextPanel(id);
  api.updateClass(t);
  return false;
}

$(document).on("shown.bs.tab", '#my-tab a[data-toggle="tab"]', function (e) {
  var tab = $(e.target);
  var contentId = tab.attr("href");
  var prefix = "";
  prefix = $("#my-tab").data("lang") !== undefined ? "../" : "";

  if (contentId === "#b") {
    $("#king").attr("src", prefix + "assets/images/icon11.png");
    $("#folk").attr("src", prefix + "assets/images/icon2.png");
  }
  if (contentId === "#a") {
    $("#king").attr("src", prefix + "assets/images/icon1.png");
    $("#folk").attr("src", prefix + "assets/images/icon21.png");
  }
});

/*-----------------------------------------------------------------------------------*/
/*	OPEN CLIENT ZONE
 /*-----------------------------------------------------------------------------------*/
$("#openClient button").click(function () {
  var inputVal = $("#openClient input").val();
  var testURL = "http://" + inputVal + ".familyhistory.sk/true.php";
  var redirectURL = "http://" + inputVal + ".familyhistory.sk";
  $.ajax({
    type: "POST",
    url: testURL,
    success: function () {
      window.location.replace(redirectURL);
    },
    error: function () {
      alert("ID klienta neexistuje. Zadali ste ho správne?");
    },
  });
  return false;
});
