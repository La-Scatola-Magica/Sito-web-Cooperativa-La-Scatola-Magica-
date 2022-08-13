(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);






resultsCounter = function() {
    function numberCount(el, number, time) {
      $({ value: 0 })
        .stop(true)
        .animate(
          { value: number },
          {
            duration: time,
            step: function() {
              var roundNumber = Math.round(this.value).toLocaleString('en-US');
              el.text(roundNumber);
            }
          }
        )
        .promise()
        .done(function() {
          el.text(number.toLocaleString('en-US'));
        });
    }
  
    numberCount($("#countOne"), 30, 1000);
    numberCount($("#countTwo"), 1748, 1500);
    numberCount($("#countThree"), 5, 2000);
  };
  
  resultsCounter();
  
  $('button').click(function() {
    resultsCounter();
  });
  
  
  var n = 10000;
  var value = n.toLocaleString('en-US');
  console.log(value)
