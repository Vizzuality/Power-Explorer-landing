
var RocketLauncher = function() {
    'use strict';

    new IntroductionView();
    new SignalsView();
    new DescriptionView();
    new FeaturesView();

    var $menu = $('.menu');
    var limitShow = $('.signals').offset().top;

    var showMenu = function() {
      $menu.removeClass('unrevealed');
    };

    var hideMenu = function() {
      $menu.addClass('unrevealed');
    };

    var getScroll = function() {
      return window.pageYOffset;
    };

    var checkPosition = function() {
      var bodyHeight = getScroll();

      if (bodyHeight >= limitShow) {
        showMenu()
      } else {
        hideMenu();
      }
    }

    $('.menu .logo').on('click', function(e) {
      if(e) {
        e.preventDefault();
      }

      $('body').animate({
        scrollTop: 0
      }, 500, 'swing');

    })

    $(window).on('scroll', function() {

      checkPosition();
    });

    checkPosition();
};


window.onload = function() {
  'use strict';

   new RocketLauncher();
};
