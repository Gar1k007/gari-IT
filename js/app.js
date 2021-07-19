$(function(){

    var introH = $("#intro").innerHeight(), 
    header = $("#header"), 
    scrollOffset = $(window).scrollTop();



    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        
    })



    function checkScroll(scrollOffset){
        
        

        if(scrollOffset >= introH){
            header.addClass("header--fixed");
        }else{
            header.removeClass("header--fixed");
        }
    }

    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this), 
            blockID = $this.data('scroll'),
            blockOffset = $(blockID).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });


    /*menu nav toglle*/
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /*collaps (accordion)*/
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this), 
            blockID = $this.data('collapse');

        $this.toggleClass("active");
        /*$(blockID).slideToggle();*/
    });


    /*slide*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});