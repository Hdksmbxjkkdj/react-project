import { useEffect } from "react";

function mainSlider() {
  var BasicSlider = window?.$('.slider-active');
  var $firstAnimatingElements = window?.$('.single-slider:first-child').find('[data-animation]');
  doAnimations($firstAnimatingElements);
	BasicSlider.on('init', function (e, slick) {
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = window?.$('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations(window?.$animatingElements);
	});
	BasicSlider.window?.slick({
		autoplay: true,
		autoplaySpeed: 8000,
		dots: true,
		fade: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		responsive: [{
		breakpoint: 767,
		settings: {
			dots: false,
			arrows: false
		}
		}]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
		var $this = window?.$(this);
		var $animationDelay = window?.$this.data('delay');
		var $animationType = 'animated ' + window?.$this.data('animation');
		$this.css({
			'animation-delay': $animationDelay,
			'-webkit-animation-delay': $animationDelay
		});
		window?.$this.addClass($animationType).one(animationEndEvents, function () {
			window?.$this.removeClass($animationType);
		});
		});
	}
	}

// import slider3 from '../../../img/slider/01/slider-3.jpg';
const Slider = () => {
    mainSlider();
  return (
    <>
      <div class="slider__inner slider-active">
        <div class="single-slider w-img">
          <img src={"./img/slider/01/slider-1.jpg"} alt="slider" />
        </div>
        {/* <div class="single-slider w-img">
          <img src={"./img/slider/01/slider-2.jpg"} alt="slider" />
        </div>
        <div class="single-slider w-img">
          <img src={"./img/slider/01/slider-3.jpg"} alt="slider" />
        </div> */}
      </div>
    </>
  );
};

export {Slider};