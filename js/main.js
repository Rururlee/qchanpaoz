/*share*/
$(function(){//滑動載入
	AOS.init({
			easing: 'ease-out-back',
			duration: 1000

	});
})

	//清除所有cookie函数
function clearAllCookie() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if(keys) {
	for(var i = keys.length; i--;)
						document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
			}
}

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.top a');

(function() {
    
    	$.fatNav();
    
	}());
	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});



/*index*/
$(function(){
  $('.top_image').vegas({ 
    slides: [
     { src: 'images/t-bn.jpg' }, 
     { src: 'images/t-bn2.jpg' },
     { src: 'images/t-bn3.jpg' }
    ],
     delay: 5000, 
     timer: false, 
     animation: 'kenburns', 
     transition: 'fade', 
     transitionDuration: 3000 
  });
});





/*product*/

$(function(){
	$(".mask").hover(function(){
		$(this).next().children().stop().css({
		 "transform": "scale(1.05)",
		  "opacity":"0.7"
		},500);
	},
	function(){
		$(this).next().children().stop().css({
			 "transform": "scale(1)",
			 "opacity":"1"
		},500);
	})

	$(".shop-title").hover(function(){
		$(this).next().children().stop().css({
		 "transform": "scale(1.05)",
		  "opacity":"0.7"
		},500);
	},
	function(){
		$(this).next().children().stop().css({
			 "transform": "scale(1)",
			 "opacity":"1"
		},500);
	})

})



// $(document).ready(function(){//lightbox
// 	$(".inline").colorbox({inline:true, width:"1100px"});
// 	$(".sp-inline").colorbox({inline:true, width:"100%",height:"950px"});
// })


//menu-area
 $(document).ready(function(){
	$('#m1').click(function()
		{$('html,body').animate(
			{scrollTop:$('#list-1').offset().top}, 700); });
	$('#m2').click(function()
		{$('html,body').animate(
			{scrollTop:$('#list-2').offset().top}, 700); });
	$('#m3').click(function()
		{$('html,body').animate(
			{scrollTop:$('#list-3').offset().top}, 700); });
 });