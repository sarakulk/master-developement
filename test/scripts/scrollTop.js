var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.container-fluid').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop || st > navbarHeight){
       
        $('.container-fluid').addClass('top-nav-visibility');
    } else {
        
        if(st + $(window).height() < $(document).height()) {
            $('.container-fluid').removeClass('top-nav-visibility');
        }
    }
    
    lastScrollTop = st;
}