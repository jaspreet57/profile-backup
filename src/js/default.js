// Default JavaScript Functions and Initiations
$(document).ready(function() {
    /*
    * sticky 
    * */
    $("#sticky-navbar").sticky({topSpacing:0, responsiveWidth: true, zIndex: 99999999});

    /* 
    * background color scroll
    * */
    $(window).scroll(function() {
      var $window = $(window),
          $body = $('body'),
          $panel = $('.color-panel');
      
      var scroll = $window.scrollTop() + ($window.height() / 3);  // Change 33% earlier than scroll position so colour is there when you arrive.
     
      $panel.each(function () {
        var $this = $(this);
        
        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
              
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
          });
           
          // Add class of currently active div
          $body.addClass('color-' + $(this).data('color'));
        }
      });    
      
    }).scroll();


    /*
    * Smooth Scroll plugin
    * */
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1500,
      easing: 'easeInOutCubic',
    });
});
