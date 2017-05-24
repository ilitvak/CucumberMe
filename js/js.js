$(document).ready(function(){
    
    // Animates logo on window load.
    $("#logo").css("transform", "scale(1)");
    
    // Slides in iphone when the user scrolls half way through page
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 710) {
            $(".cucumber-gallery .box-container img").css("left", 0);
        }
    });
    
    // pushes down footer section to reveal FAQ section

});
    
