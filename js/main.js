$(document).ready(function() {



$(window).setBreakpoints({distinct: true, breakpoints:[320,480,768,992]});     

    $(window).bind('enterBreakpoint320',function() {
      $('.burger-menu').click(function() {
        TweenLite.to($('.nav-wrapper'), .3, {left:'0%'});
      });
      $('.close-btn').click(function() {
        TweenLite.to($('.nav-wrapper'), .3, {left:'100%'})
      });

      $('.burger-menu').on("tap", function() {
        TweenLite.to($('.nav-wrapper'), .3, {left:'0%'});
      });
      $('.close-btn').on("tap", function() {
        TweenLite.to($('.nav-wrapper'), .3, {left:'100%'})
      });


    });

    $(window).bind('enterBreakpoint768',function() {
        $('.burger-menu').click(function() {
          TweenLite.to($('.nav-wrapper'), .3, {left:'0%'});
        });
      $('.close-btn').click(function() {
        TweenLite.to($('.nav-wrapper'), .3, {left:'100%'})
      });

      $('.burger-menu').on("tap", function() {
        TweenLite.to($('.nav-wrapper'), .3, {left:'0%'});
      });
      $('.close-btn').on("tap", function() {
        TweenLite.to($('.nav-wrapper'), .3, {left:'100%'})
      });


    });

    $(window).bind('enterBreakpoint992',function() {
      $('[data-toggle="tooltip"]').tooltip();

      $('.burger-menu').click(function() {
        var tl = new TimelineLite();
        tl.to($('.content-wrapper'), .7, {left:'-25%', opacity:.3, ease:Power3.easeInOut}, "content-start")
        .to($('.nav-wrapper'), .7, {left:'75%', ease:Power3.easeInOut}, "content-start");
      });

      $('.burger-menu').on("tap", function() {
        var tl = new TimelineLite();
        tl.to($('.content-wrapper'), .7, {left:'-25%', opacity:.3, ease:Power3.easeInOut}, "content-start")
        .to($('.nav-wrapper'), .7, {left:'75%', ease:Power3.easeInOut}, "content-start");
      });
      // Close
      $(document).keyup(function(e) {
          if (e.keyCode == 27) {
          var tl = new TimelineLite();
          tl.to($('.content-wrapper'), .7, {left:'0%', opacity:1, ease:Power3.easeInOut}, "tl-start")
          .to($('.nav-wrapper'), .7, {left:'100%', ease:Power3.easeInOut}, "tl-start")
          .to($('#success-box'), .7, {left:'100%', ease:Power3.easeInOut}, "tl-start");
          }
      });
      $('.close-btn').click(function() {
        var tl = new TimelineLite();
        tl.to($('.content-wrapper'), .7, {left:'0%', opacity:1, ease:Power3.easeInOut}, "tl2-start")
        .to($('.nav-wrapper'), .7, {left:'100%', ease:Power3.easeInOut}, "tl2-start");
      });


      $('.close-btn').on("tap", function() {
        var tl = new TimelineLite();
        tl.to($('.content-wrapper'), .7, {left:'0%', opacity:1, ease:Power3.easeInOut}, "tl2-start")
        .to($('.nav-wrapper'), .7, {left:'100%', ease:Power3.easeInOut}, "tl2-start");

      });

    });

	$(window).load(function() {



	});

	$(window).resize(function() {


  });

});


