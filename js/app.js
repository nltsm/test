app.addModule('articles-block', function () {
	let isSlick = false;

	this.init = function () {
		if ($(window).width() < 767) {
			if (!isSlick) {
				slick();
			}
		} else {
			if (isSlick) {
				unslick();
			}
		}
	};

	function slick() {
		$('.articles-block_row').slick({
			dots: true
		})
	}

	function unslick() {
		$('.articles-block_row').slick('unslick');
	}
});

app.addModule('brand-block', function () {
	let isSlick = false;

	this.init = function () {
		if ($(window).width() < 767) {
			if (!isSlick) {
				slick();
			}
		} else {
			if (isSlick) {
				unslick();
			}
		}
	};

	function slick() {
		$('.brand-block_items').slick({
			dots: true,
			slidesToShow: 3
		})
	}

	function unslick() {
		$('.brand-block_items').slick('unslick');
	}
});

app.addModule('button-item', function () {
	this.init = function () {
		$('.button-item.__phone-click').click(function (e) {
			e.preventDefault();
			
			$(this).toggleClass('__phone')
		})
	};
});

app.addModule('cart-slider', function () {
	this.init = function () {
		$('.cart-slider_main').slick({
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1
					}
				}
			]
		})
	};
});

app.addModule('main', function () {
	this.init = function () {
		$('.main_search-input').on('focus', function () {
			$(this).next().addClass('__hidden');
		})
		$('.main_search-input').on('blur', function () {
			if (!$(this).val()) {
				$(this).next().removeClass('__hidden');
			}
		})
		
		setTimeout(function () {
			changeMainDescriptionText();
		}, 1000);

		function changeMainDescriptionText() {
			var active = $('.main_search-text-data span:not(.__hidden)')

			$('.main_search-text-data').stop().animate({
				width: 2
			}, 500);

			setTimeout(function () {
				var next = active.next().length ? active.next() : $('.main_search-text-data span:first-child');

				active.addClass('__hidden').removeAttr('style');

				next.removeClass('__hidden').removeAttr('style');

				var nextWidth = next.innerWidth();

				$('.main_search-text-data').css('width', '0');

				$('.main_search-text-data').stop().animate({
					width: nextWidth + 10
				}, 500);

				setTimeout(function () {
					changeMainDescriptionText();
				}, 1700);
			}, 700)
		}
	};
});

app.addModule('map-block', function () {
	this.init = function () {
		$('.map-block_tel-button').click(function (e) {
			e.preventDefault();
			
			$(this).closest('.map-block_tel').toggleClass('active');
		});
		
		$('.map-block_slider').slick({
			slidesToShow: 2,
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
		
		let mobileLinkText = $('.map-block_mobile-link').text();
		let mobileLinkReverseText = $('.map-block_mobile-link').attr('data-close');
		let mapOpened = false;
		
		$('.map-block_mobile-link').click(function (e) {
			e.preventDefault();
			
			$('.map-block_slider, .map-block_map').toggleClass('active');
			
			mapOpened = !mapOpened;
			
			$(this).text(mapOpened ? mobileLinkReverseText : mobileLinkText)
		})
	};
});

app.addModule('mobile-load', function () {
	this.init = function () {
		$('[data-clone-id]').each(function () {
			var element = $('#' + $(this).attr('data-clone-id'));
			
			if (element.length) {
				$(this).append(
					element.clone(true, true).removeAttr('id').addClass('__cloned')
				);
			}
			
			$(this).removeAttr('data-clone-id');
		});
	};
});
app.addModule('models-block', function () {
	let isSlick = false;

	this.init = function () {
		if ($(window).width() < 767) {
			if (!isSlick) {
				slick();
			}
		} else {
			if (isSlick) {
				unslick();
			}
		}
	};

	function slick() {
		$('.models-block_items').slick({
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 3
					}
				},
			]
		})
	}

	function unslick() {
		$('.models-block_items').slick('unslick');
	}
});

app.addModule('news-block', function () {
	this.init = function () {

	};
});

app.addModule('plus-block-2', function () {
	let isSlick = false;

	this.init = function () {
		if ($(window).width() < 767) {
			if (!isSlick) {
				slick();
			}
		} else {
			if (isSlick) {
				unslick();
			}
		}
	};

	function slick() {
		$('.plus-block-2_row').slick({
			slidesToShow: 1,
		});
	}

	function unslick() {
		$('.plus-items_row').slick('unslick');
	}
});

app.addModule('plus-items', function () {
	let isSlick = false;
	
	this.init = function () {
		if ($(window).width() < 767) {
			if (!isSlick) {
				slick();
			}
		} else {
			if (isSlick) {
				unslick();
			}
		}
	};
	
	function slick() {
		$('.plus-items_row').slick({
			slidesToShow: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						dots: true
					}
				}
			]
		});
	}
	
	function unslick() {
		$('.plus-items_row').slick('unslick');
	}
});

app.addModule('reviews-block', function () {
	this.init = function () {
		$('.reviews-block_slider').slick({
			dots: true,
			slidesToShow: 1,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						arrows: false
					}
				},
				{
					breakpoint: 767,
					settings: {
						arrows: true
					}
				},
			]
		})
	};
});

app.addModule('scroll-block', function () {
	this.init = function () {
		$('.scroll-block_scroll').mCustomScrollbar({
			theme:"rounded-dots",
			scrollInertia:400,
			callbacks: {
				whileScrolling: function () {
					let container = $(this).find('.mCSB_container');
					let top = Math.abs(parseInt(container.css('top')));
					
					let percent = 100 * top  / (container.height()  - $(this).height());
					
					$(this).closest('.scroll-block').find('.scroll-block_progress').css('height', $(this).height() * percent / 100)
				}
			}
		});
	};
});

app.addModule('services-block', function () {
	this.init = function () {
		$('.services-block_slider').slick({
			slidesToShow: 1,
			adaptiveHeight: true,
			
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
		})
		
		
	};
});

app.addModule('work-description', function () {
	this.init = function () {
		let link = $('.work-description_link');
		
		let text = link.text();
		let closeText = link.attr('data-close');
		let isVisible = false;

		link.click(function (e) {
			e.preventDefault();
			
			$('.work-description_hidden').slideToggle();
			
			isVisible = !isVisible;
			
			$(this).text(isVisible ? closeText : text);
		})
	};
});

jQuery(function () {
	app.callModules();
});