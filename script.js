
   $(".footer-links-wrapper h3").click(function() {
        
       
        if ($(window).width() <= 768) {
            
            let currentHeader = $(this);
            let currentUl = currentHeader.next("ul"); 
            
            currentUl.slideToggle(600);
            currentHeader.toggleClass("new");
        }
    });
    
    
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $(".footer-links-wrapper ul").show(); 
        } else {
            $(".footer-links-wrapper ul").hide(); 
            $(".footer-links-wrapper h3").removeClass("new"); 
        }
     });
    