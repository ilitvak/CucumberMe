$(document).ready(function(){
    
    // Animates logo on window load.
    $("#logo").css("transform", "scale(1)");
    
    
    // Scrolls to section and checks whether its desktop or mobile
    
    $(".scroller").click(function(e){
        e.preventDefault();
        var aSelector = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(aSelector).offset().top
        }, 1200);
    })
    
    // Slides in iphone when the user scrolls half way through page
    
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".how-it-works").offset().top) {
            $(".cucumber-gallery .box-container img").css("left", 0);
        }
    });

    // Places footer section on top of faq section
    $("footer").css("top", 
        $("section.faq").offset().top - $("footer").offset().top - 1
    );
    
    // pushes down footer section to reveal FAQ section
    $(window).scroll(function(){
        if( $(window).scrollTop() + $(window).height() >= $("section.faq").offset().top + 150  ) {
            $("footer").css( "top", 0 );
        }
    })
    
    // Dynamic footer section height adjusted by section faq height
    
    $("footer").css( "height", $("section.faq").outerHeight() );
        
});
    
var heart = document.getElementById("heart");
    
// array of colors
var colorWheel = ["#1abc9c", "#8E44AD", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c", "#EEFF6B"];

var count = 0;

// rotates through an array of colors
setInterval(function(){
    heart.style.color = colorWheel[count];
    if(count++ == colorWheel.length){
        count = 0;
    }
}, 1000);