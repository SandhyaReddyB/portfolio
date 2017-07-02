$(document).ready(function() {
    /* For sticky navigation */
    var waypoint = new Waypoint({
        element: document.querySelector('.js--quote'),
            handler: function(direction) {
                if(direction == "down"){ 
                    $('nav').addClass('sticky');
                }
                else {
                    $('nav').removeClass('sticky');
                }
            }, offset: '10%'
    })
    
    /* Animations on scroll */
    var waypoint1 = new Waypoint({
        element: document.querySelector('.js--roles'),
            handler: function(direction) {
                $('.js--roles').addClass('animated fadeIn');
            },offset: '50%'
    })
    
    var waypoint2 = new Waypoint({
        element: document.querySelector('.js--heading'),
            handler: function(direction) {
                $('.js--heading').addClass('animated swing');
            },offset: '50%'
    })
    
     var waypoint3 = new Waypoint({
        element: document.querySelector('.js--quote'),
            handler: function(direction) {
                if(direction == "down"){ 
                    $('.chevron').addClass('scroll-to-top');
                }
                else {
                    $('.chevron').removeClass('scroll-to-top');
                }
            }, offset: '10%'
    })
    
    /* Smooth scrolling */

    // Select all links with hashes and Remove links that don't actually link to anything
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top -30
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { 
                        // Checking if the target was focused
                        return false;
                    } 
                    else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});




























