/*global $ */
(function($) {
    "use strict";

    // $(window).on('load', function(){
    //     $('body').addClass('stopScroll');
    //     $('.loader').fadeOut(500, function () {
    //         $(this).remove();
    //         $('body').removeClass('stopScroll');
    //     }); 
    // });

    var rtlVal = true ;    
    if($('body').hasClass('en')) {
        rtlVal = false;
    }
    else{
        rtlVal = true;
    }

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $(this).addClass('open');
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.bodyOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show'); 
        $('.menuBtn').removeClass('open'); 
        $('body').removeClass('stopScroll');  
    });

    // //  Open DropDown
    // $('.dropToggle').on('click', function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if($(this).next('.dropDown').hasClass('open')){
    //         $('.dropDown').removeClass('open');
    //     } else {
    //         $('.dropDown').removeClass('open');
    //         $(this).next('.dropDown').toggleClass('open');
    //     } 
    // });

    //  Close DropDown
    // $(document).on('click', function(){
    //     $('.dropDown').removeClass('open');
    // });

    
    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: rtlVal ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });


    // Testimonials OWL 
    $('.owlOffers').owlCarousel({
        rtl: rtlVal ,
        margin: 30,
        autoplay: true,
        loop: false,
        nav: true,
        dots: true,
        center : false ,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        navText: ["<img src='images/arrowRight.png'>", "<img src='images/arrowLeft.png'>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 2
            },
            600: {
                items: 3,
                dotsEach: 2
            },
            1000: {
                items: 4,
                dotsEach: 1
            }
        }
    });


    var a = 0;
    function count () {
        $('.countNum').each(function () {
            let countNum = $(this).text();
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        a = 1;
    }

    $(window).scroll(function() {
        var oTop = $('.counters').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            count();
        }
    });


    // Partners OWL 
    // $('.owlPartners').owlCarousel({
    //     margin: 20,
    //     autoplay: true,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 5000,
    //     autoplayTimeout : 5000,
    //     smartSpeed: 5000 ,
    //     navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });

    // Clients OWL 
    // $('.owlClients').owlCarousel({
    //     margin: 20,
    //     autoplay: true,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 5000,
    //     autoplayTimeout : 5000,
    //     smartSpeed: 5000 ,
    //     navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });


    // // Upload File 
    // $('.uploadFile').on('change', function(e) {
    //     let fileName = e.target.value.split( '\\' ).pop();
    //     console.log(fileName);
    //     let files = $(this).parent('.uploadBox').prev('.uploadedFiles');
    //     files.append(
    //         '<div class="file">' +
    //             '<h3 class="fileName">' + fileName  + '</h3>' +
    //             '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
    //         '</div>'
    //     );               
    // });

    // // Delete File
    // $(document).on('click','.deleteFile' , function(){
    //     $(this).parent('.file').remove();
    // });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

