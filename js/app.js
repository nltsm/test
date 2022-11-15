app.addModule('articles-block', function () {
	this.init = function () {
		if ($(window).width() < 481) {
			$('.articles-block_row').slick({
				dots: true
			})
		}
	};
});

app.addModule('brand-block', function () {
	this.init = function () {
		if ($(window).width() < 767) {
			$('.brand-block_items').slick({
				slidesToShow: 3
			})
		}
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
	this.init = function () {
		if ($(window).width() < 767) {
			$('.models-block_items').slick({
				slidesToShow: 4,
				responsive: [
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 3
						}
					}
				]
			})
		}
	};
});

app.addModule('news-block', function () {
	this.init = function () {

	};
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
			slidesToShow: 1
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

jQuery(function () {
	app.callModules();
});