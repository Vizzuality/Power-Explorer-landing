import 'foundation-sites/dist/foundation-flex.css';
import 'slick-carousel/slick/slick.css';
import './styles/index.scss';

import $ from 'jquery';
import slick from 'slick-carousel/slick/slick';

function onReady() {
  const $page = $('html, body');
  const $scrollButton = $('#scrollButton');
  const $navigation = $('#navigation');
  const windowHeight = window.innerHeight;

  $scrollButton.on('click', () => {
    $page.animate({ scrollTop: windowHeight }, 116);
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= windowHeight) {
      const opacityValue = (windowHeight - window.pageYOffset) / windowHeight;
      $scrollButton.css('opacity', opacityValue);
    }
    if (window.pageYOffset > windowHeight) {
      $navigation.removeClass('-hide');
    } else {
      $navigation.addClass('-hide');
    }
  });
}

function onLoad() {
  $('.m-slider').slick();
}

document.addEventListener('DOMContentLoaded', onReady);
window.addEventListener('load', onLoad);
