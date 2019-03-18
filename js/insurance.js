var n = 0;
var timer;
function gogo(){
	timer = setInterval(function () {
		n++;
		if(n > 4){
		    n = 0;
		}
		slideShow();
	},1500)
};

function slideShow(){
	$('.slideshow .slideshow-body').eq(n).addClass('slides-active');
	$('.slideshow .slideshow-body').eq(n).siblings().removeClass('slides-active');
	$('.slideshow .btn-item').eq(n).addClass('active');
	$('.slideshow .btn-item').eq(n).siblings().removeClass('active');
};
$('.slideshow').hover(function(){
	clearInterval(timer);
},function(){
	gogo();
});
$('.slideshow .btn-item').click(function(){
	n = $(this).index();
	slideShow();
})