
var DescriptionView = Backbone.View.extend({

  el: '#description',

  initialize: function() {
    this.startSlider();
  },

  startSlider: function() {
    var slick = $.fn.slick;

    this.$el.find('.slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  }

});
