// import slider1 from '../../../img/slider/01/slider-1.jpg';
// import slider2 from '../../../img/slider/01/slider-2.jpg';
// import slider3 from '../../../img/slider/01/slider-3.jpg';
const Slider = () => {
    // mainSlider();
  return (
    <>
      <div class="slider__inner slider-active">
        <div class="single-slider w-img">
          <img src={"./img/slider/01/slider-1.jpg"} alt="slider" />
        </div>
        {/* <div class="single-slider w-img">
          <img src={slider2} alt="slider" />
        </div>
        <div class="single-slider w-img">
          <img src={slider3} alt="slider" />
        </div> */}
      </div>
    </>
  );
};

// function mainSlider() {
// 	var BasicSlider = $('.slider-active');
// 	BasicSlider.on('init', function (e, slick) {
// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
// 		doAnimations($firstAnimatingElements);
// 	});
// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
// 		doAnimations($animatingElements);
// 	});
// 	BasicSlider.slick({
// 		autoplay: true,
// 		autoplaySpeed: 8000,
// 		dots: true,
// 		fade: false,
// 		arrows: false,
// 		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
// 		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
// 		responsive: [{
// 		breakpoint: 767,
// 		settings: {
// 			dots: false,
// 			arrows: false
// 		}
// 		}]
// 	});

// 	function doAnimations(elements) {
// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 		elements.each(function () {
// 		var $this = $(this);
// 		var $animationDelay = $this.data('delay');
// 		var $animationType = 'animated ' + $this.data('animation');
// 		$this.css({
// 			'animation-delay': $animationDelay,
// 			'-webkit-animation-delay': $animationDelay
// 		});
// 		$this.addClass($animationType).one(animationEndEvents, function () {
// 			$this.removeClass($animationType);
// 		});
// 		});
// 	}
// 	}

export {Slider};