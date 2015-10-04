
var RocketLauncher = Class.extend({

  init: function() {
    new IntroductionView();
    new SignalsView();
    // new DescriptionView();
    new FeaturesView();
    new FooterCarousel();

    this.setListeners();
    this.checkPosition();
  },

  setListeners: function() {
    $('.menu .logo').on('click', function(e) {
      if(e) {
        e.preventDefault();
      }

      $('body').animate({
        scrollTop: 0
      }, 500, 'swing');
    });

    $(window).on('scroll', _.bind(function() {
      this.checkPosition();
    }, this));
  },

  getScroll: function() {
    return window.pageYOffset;
  },

  checkPosition: function() {
    var bodyYOffset = this.getScroll(),
      $menu = $('.menu'),
      limitShow = $('.signals').offset().top;

    var showMenu = function() {
      $menu.removeClass('unrevealed');
    };

    var hideMenu = function() {
      $menu.addClass('unrevealed');
    };

    if (bodyYOffset >= limitShow) {
      showMenu();
    } else {
      hideMenu();
    }
  }

});

window.onload = function() {
  'use strict';
  new RocketLauncher();
};
