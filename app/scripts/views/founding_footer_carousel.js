
var FoundingFooterCarousel = Backbone.View.extend({

  el: '#foundingFooterCarousel',

  initialize: function() {
    if (!this.$el.length) {
      return;
    }
    //INIT
    this.$el.slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 0,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slide: 'li'
    });
  }

});
