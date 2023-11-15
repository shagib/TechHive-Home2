  
(function ($) {
    "use strict";
    $(document).ready(function () {
  
  
        
        // alert('working');
        /*
            Slider
            ============================*/
            $(".brand-slider-wrapper").slick({
                slidesToShow: 5,
                infinite: true,
                autoplay: false,
                draggable: true,
                arrows: false,
                slidesToScroll: 1,
                loop: true,
                dots: false,
                swipeToSlide:true,
                speed: 1500,
                prevArrow:
                    "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
                nextArrow:
                    "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
                responsive: [
                    
                       
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
    
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                        
                            },
                        },

{
    breakpoint: 767,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

    },
},
{
    breakpoint: 576,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

    },
},

                ],
            });


            // Team Slider 

            $(".team-member-area").slick({
                slidesToShow: 4,
                infinite: true,
                autoplay: false,
                arrows: true,
                slidesToScroll: 1,
                
                loop: true,
                dots: true,
                speed: 300,
                prevArrow:
                    "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
                nextArrow:
                    "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
                    
                    
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow : 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow : 1,
                        },
                    },
                ],
            });






    });
})(jQuery);