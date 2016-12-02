
var FundersFooterCarousel = Backbone.View.extend({

  el: '#fundersFooterCarousel',

  initialize: function() {
    if (!this.$el.length) {
      return;
    }
    //INIT
    this.$el.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 0,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slide: 'li'
    });
  }

});
