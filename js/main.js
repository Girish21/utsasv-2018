$(window).on('load', function() {
    $(".loader").fadeOut("slow");
});


$(document).ready(function () {
    $("#burger-container").removeClass('open');
    $('header').removeClass('nav-open');
    $('.side-nav').removeClass('show-side-nav');

    $("#burger-container").on("click", function () {
        $(this).toggleClass('open');
        $('.side-nav').toggleClass('show-side-nav');
        $('header').toggleClass('nav-open');
    });

    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
    });

    // li click listener

    var items = document.querySelectorAll('#main-nav li');

    for (var i = 0; i < items.length; i++) {
        // items[i].addEventListener('click', function(e) {
        //     console.log(e);
        // });
        items[i].onclick = function () {
            switch (this.id) {
                case 'event':
                    window.location = window.location.origin + '/events.html';
                    break;
                case 'workshop':
                    window.location = window.location.origin + '/workshop.html';
                    break;
                case 'contact':
                    window.location = window.location.origin + '/contact.html';
                    break;
            }
        };
    }

});

window.addEventListener("scroll", function (e) {
    $('.side-nav').removeClass('show-side-nav');
    $('header').removeClass('nav-open');
    $("#burger-container").removeClass('open');
});

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        displayScrollToTop();
    } else {
        hideFAB();
    }
});

function hideFAB() {
    $('.btn').removeClass('display-fab');
}

function displayScrollToTop() {
    $('.btn').addClass('display-fab');
}


