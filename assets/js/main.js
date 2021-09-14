// ------------ increase products -----------
$(".increse").click(function() {
    $(this).parent().children(".number-count ").html(parseInt($(this).parent().children(".number-count").html()) + 1);
});

$(".decrese").click(function() {

    child = $(this).parent().children(".number-count ");

    if (parseInt(child.html()) > 1) {
        child.html(parseInt(child.html()) - 1);
    }

    $(this).parent().children(".full-price").addClass("minused");

});
var oldPass = false;
function oldPassFun(){
    if(oldPass){
        document.getElementById("oldPassId").setAttribute("type" , "password");
        oldPass = false;
    }else{
        document.getElementById("oldPassId").setAttribute("type" , "text");
        oldPass = true;
    }
}
var newPass = false;
function newPassFun(){
    if(newPass){
        document.getElementById("newPassId").setAttribute("type" , "password");
        newPass = false;
    }else{
        document.getElementById("newPassId").setAttribute("type" , "text");
        newPass = true;
    }
}
var acceptNewPass = false;
function acceptNewPassFun(){
    if(acceptNewPass){
        document.getElementById("acceptNewPassId").setAttribute("type" , "password");
        acceptNewPass = false;
    }else{
        document.getElementById("acceptNewPassId").setAttribute("type" , "text");
        acceptNewPass = true;
    }
}

$(document).ready(function () {
    /*start the loading page */
    // window.addEventListener("load", function () {
    //     const loader = document.querySelector(".loader");
    //     loader.className += " hidden";
    // });
   
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //fancybox 
    $('.fancybox').fancybox({
        arrows: false,
        loop: false,
        keyboard: false,
        infobar: false,
        protect: true,
        hideScrollbar: true,
        touch: false ,
        image: {
            preload: true
        },
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });
    //start active navbar
    $('.nav-toggler').click(function(){
        $('.nav-toggler').toggleClass('active');
        $('.nav-list').toggleClass('active-nav');
        $('body').toggleClass('overflowNone');
    });
    $('.overlay').click(function(){
        $('.nav-toggler').removeClass('active');
        $('.nav-list').removeClass('active-nav');
        $('body').removeClass('overflowNone');
    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });
    //shop slider 
    $('.owl-shop').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            400:{
                items:2
            },
            
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    $('.open-popup-btn').click(function(){
        $('.popup-window').addClass('active');
    });
    $('.dismiss-popup-btn').click(function(){
        $('.popup-window').removeClass('active');
        $('.popup-sort').removeClass('active');
    });
    $('.popup-overlay').click(function(){
        $('.popup-window').removeClass('active');
        $('.popup-sort').removeClass('active');
    });
    $('.data-sort').click(function(){
        $('.popup-sort').addClass('active');
    });
});