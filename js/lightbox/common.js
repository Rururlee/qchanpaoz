;var index = index || {};

(function($){


/*----------------------------------------------------------------------
	DOM READY
----------------------------------------------------------------------*/
jQuery(function($){

	new Common.loadFadeIn();

	$('body').imagesLoaded().always( function() {
		var $modal = $('#modal-item');
		var $modalItem = $modal.find('.item');
		var modalItemLength = $modalItem.length;

		if (modalItemLength) {
			var sliders = [];

			while(modalItemLength) {
				modalItemLength--;

				var $modalEl = $modalItem.eq(modalItemLength);
				var sliderEl = $modalEl.find('.swiper-container').get(0);

				// loopをtrueにした場合、watchOverflowオプションが機能しない
				sliders[$modalEl.get(0).getAttribute('id')] = new Swiper(sliderEl, {
					init: true,
					speed: 600,
					pagination: {
					  el: '.swiper-pagination',
					  clickable: true
					},
					watchOverflow: true,
					// loop: true,
					slidesPerView: 'auto',
					roundLengths: false,
					autoResize: true,
					breakpoints: {
					  767: {
					    slidesPerView: 'auto'
					  }
					},
					keyboard: true
				});
			}

			// モーダル展開後、updateを呼ぶことでスライダー動作を正常化する
			$modal.on('modal-open', function (e, modalCont){
				sliders[modalCont.substring(1)].update();
			});
		}

		if($modal.length) {
			//商品詳細モーダル
			var modal = new common.modal($modal,$('.product-block .modal-trigger'));
		}
  });//imagesLoaded

});

}(jQuery));// JavaScript Document
