document.documentElement.className = 'js';

function show(div) {
    document.getElementById('content-1').style.display = "none";
    document.getElementById('content-2').style.display = "none";

    document.getElementById('kralovska').src = "assets/images/icon11.png";
    document.getElementById('lud').src = "assets/images/icon21.png";

    if (div == '1') {
        document.getElementById('kralovska').src = "assets/images/icon1.png";
    }
    if (div == '2') {
        document.getElementById('lud').src = "assets/images/icon2.png";
    }
    document.getElementById('content-' + div).style.display = "block";
}

$(document).ready(function () {

    $('#parallax .parallax-layer').parallax({
        mouseport: $('#over,.over'), xorigin: 0, yorigin: 0
    });

    $(".scrollto").click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top}, 500);
        return false;
    });

    $('.kwicks').kwicks({
        maxSize: 250,
        behavior: 'menu'
    });

});

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
    transitionStyle: "fade"
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
    transitionStyle: "fade"
});

/*-----------------------------------------------------------------------------------*/
/*	LIQUID SLIDER
 /*-----------------------------------------------------------------------------------*/
$('#slider-1').liquidSlider({
    continuous: false,
    slideEaseFunction: "easeInOutCubic"
});
$('#slider-2').liquidSlider({
    continuous: false,
    slideEaseFunction: "easeInOutCubic",
    hoverArrows: false
});
$('#slider-3').liquidSlider({
    continuous: false,
    slideEaseDuration: 500,
    slideEaseFunction: "easeInOutCubic",
    hoverArrows: false
});
$('#slider-4').liquidSlider({
    continuous: false,
    slideEaseDuration: 500,
    slideEaseFunction: "easeInOutCubic"
});
$('#slider-5').liquidSlider({
    continuous: false,
    slideEaseDuration: 500,
    slideEaseFunction: "easeInOutCubic"
});
var api = $.data($('#slider-1')[0], 'liquidSlider');
var api4 = $.data($('#slider-4')[0], 'liquidSlider');
$('.prev-link').on('click', function () {
    api4.setNextPanel(0);
    api4.updateClass($(this));
});
$('.next-link').on('click', function () {
    api4.setNextPanel(1);
    api4.updateClass($(this));
});
$('.dots li:nth-child(1) a').addClass('ls-current');

function activateDots(id, t) {
    api.setNextPanel(id);
    api.updateClass(t);
    return false;
}

$(document).on('shown.bs.tab', '#my-tab a[data-toggle="tab"]', function (e) {
    var tab = $(e.target);
    var contentId = tab.attr("href");
    var prefix = '';
    prefix = ($('#my-tab').data('lang') !== undefined) ? "../" : '';

    if (contentId === '#b') {
        $("#king").attr("src", prefix + "assets/images/icon11.png");
        $("#folk").attr("src", prefix + "assets/images/icon2.png");
    }
    if (contentId === '#a') {
        $("#king").attr("src", prefix + "assets/images/icon1.png");
        $("#folk").attr("src", prefix +  "assets/images/icon21.png");
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
        type: 'POST',
        url: testURL,
        success: function () {
            window.location.replace(redirectURL);
        },
        error: function () {
            alert("ID klienta neexistuje. Zadali ste ho správne?");
        }
    });
    return false;
});