$(document).ready(function(){
    
    // Animates logo on window load.
    $("#logo").css("transform", "scale(1)");
    
    // Slides in iphone when the user scrolls half way through page
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 710) {
            $(".cucumber-gallery .box-container img").css("left", 0);
        }
    });
    
    // calculates top from footer section to faq section 

    // Places footer section on top of faq section
    $("footer").css("top", 
        $("section.faq").offset().top - $("footer").offset().top
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
    
