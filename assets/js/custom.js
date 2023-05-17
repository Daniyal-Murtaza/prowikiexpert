$('[href="#"]').attr("href", "javascript:;");
$('.cl-silder').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    verticalSwiping: true,
    responsive: [{
        breakpoint: 825,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            vertical: false,
            verticalSwiping: false,
        }
    }, ]
});
$('.test').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    responsive: [{
        breakpoint: 825,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false
        }
    }, ]
});
$('.ser-slik').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 825,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            dots: false,
            arrows: false
        }
    }, ]
});
$(".dispopup").click(function () {
    $('.signUpPoptwo').fadeIn();
    $('.overlay').fadeIn();
});
$(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $(".enquirybox").fadeIn();
    } else {
        $(".enquirybox").fadeOut();
    }
});
$(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $(".etop-container").fadeIn();
    } else {
        $(".etop-container").fadeOut();
    }
});
$(".signUpOpen").click(function () {
    $(".signUpPop").fadeIn();
    $(".overlay").fadeIn();
});
$(".popupMain .closePop,.overlay").click(function () {
    $(".signUpPop").fadeOut();
    $(".overlay").fadeOut();
});
$(".request_info").on("click", function () {
    $(".floatbutton").toggleClass("active");
    $(".crossplus").toggleClass("rotate");
});
$('.clickbutton').on('click mouseover', function () {
    $(".floatbutton").toggleClass("active");
    $(".crossplus").toggleClass("rotate");
});
$(".sssignUpOpen").click(function () {
    $(".ppsignUpPop").fadeIn();
    $(".ppoverlay").fadeIn();
});
$(".pppopupMain .ppclosePop,.ppoverlay").click(function () {
    $(".ppsignUpPop").fadeOut();
    $(".ppoverlay").fadeOut();
});
$(".ssignUpOpen").click(function () {
    $(".psignUpPop").fadeIn();
    $(".poverlay").fadeIn();
});
$(".ppopupMain .pclosePop,.poverlay").click(function () {
    $(".psignUpPop").fadeOut();
    $(".poverlay").fadeOut();
});
$(document).ready(function () {
    setTimeout(function () {
        $('.signUpPoptwo').fadeIn();
        $('.overlay').fadeIn();
    }, 2000);
});

function flip() {
    $('.flipcard-iner').toggleClass('flipped');
}
$('.popupMaintwo .closePoptwo,.overlay').click(function () {
    $('.signUpPoptwo').fadeOut();
    $('.overlay').fadeOut();
});
// (function () {
//     const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 4;
//     let birthday = "October 31, 2021 21:34:56",
//         countDown = new Date(birthday).getTime(),
//         x = setInterval(function () {
//             let now = new Date().getTime(),
//                 distance = countDown - now;
//             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)), document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)), document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
//             if (distance < 0) {
//                 let headline = document.getElementById("headline"),
//                     countdown = document.getElementById("countdown"),
//                     content = document.getElementById("content");
//                 headline.innerText = "It's my birthday!";
//                 countdown.style.display = "none";
//                 content.style.display = "block";
//                 clearInterval(x);
//             }
//         }, 0)
// }());
$('#r11').on('click', function () {
    $(this).parent().find('a').trigger('click')
})
$('#r12').on('click', function () {
    $(this).parent().find('a').trigger('click')
})
$('#r13').on('click', function () {
    $(this).parent().find('a').trigger('click')
})
$('#r14').on('click', function () {
    $(this).parent().find('a').trigger('click')
})