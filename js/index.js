var n = 0;
var timer,mainBox;
var leftag = false;

$(window).resize(function() {
	if($(window).width() < 1200){
		if(leftag){
			$('aside').animate({'left':'-335px'},500);
		}else{
			$('#unfold').animate({'left':'-57px'},500);
		}
	}else{
		if(leftag){
			$('aside').animate({'left':'0'},500);
		}else{
			$('#unfold').animate({'left':'-7px'},500);
		}
	}
});

$('#unfold').click(function(){
	$(this).animate({'left':'-57px'},500);
	$('aside').animate({'left':'0'},500);
	leftag = true;
});

$('aside .fold').click(function(){
	$('aside').animate({'left':'-335px'},500);
	$('#unfold').animate({'left':'-7px'},500);
	leftag = false;
});

$('aside .gotop').click(function(){
	$('html,body').animate({scrollTop: 0}, 800);
});

$('aside .btn-item').hover(function(){
	$(this).children('.icon').css('background-position-x','-18px');
	if($(this).children().hasClass('hover-tip')){
		$(this).children('.hover-tip').show();
	}
},function(){
	$(this).children('.icon').css('background-position-x','0');
	if($(this).children().hasClass('hover-tip')){
		$(this).children('.hover-tip').hide();
	}
});

$('.main-child-title li').hover(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	mainBox = $(this).parents('div').parent();
	mainBox.children('.main-child-body').eq($(this).index()).addClass('child-active');
	mainBox.children('.main-child-body').eq($(this).index()).siblings().removeClass('child-active');
},function(){});

$('.item-memo').parent().hover(function(){
	$(this).children('.item-memo').stop().animate({'bottom':'0'},500);
},function(){
	$(this).children('.item-memo').stop().animate({'bottom':'-50px'},500);
});

$('.book-img').hover(function(){
	$(this).children('.book-detail').toggle();
});

function gogo(){
	timer = setInterval(function () {
		n++;
		if(n > 4){
		    n = 0;
		}
		tranformX();
	},3000)
};
function tranformX(){
	$('.main-slider ul').css("transform",`translateX(${-20*n}%)`);
	$('.main-slider ol li').eq(n).addClass('current');
	$('.main-slider ol li').eq(n).siblings().removeClass('current');
};
$('.main-slider').hover(function(){
	clearInterval(timer);
},function(){
	gogo();
});
gogo();
$('.main-slider ol li').click(function(){
	n = $(this).index();
	tranformX();
});