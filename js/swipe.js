$(function(){
    var blue = document.getElementById("page");
    
    Hammer(blue).on("swipeleft", function() {
               var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    });
    
    Hammer(blue).on("swiperight", function() {
          $('#site_header').toggleClass('mobile-menu-hide');
    });
})