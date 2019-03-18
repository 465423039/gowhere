var berCol;

$('a[href="#"]').click(function(){
	return false;
});

var tags = $('.nav-tags img').length;
$('.nav-tags img').eq(Math.floor(Math.random()*tags)).show();

$('.indent').hover(function(){
	$('.indent-list').toggle();
})

$('.header-nav li').hover(function(){
	$(this).children('a').css('color','#0088a4');
	if($(this).children('div').length>0){
		$(this).addClass('li-active');
		$(this).children('div').css('display','flex');
		berCol = $(this).css('border-color');
		$(this).css('border-color','#ccc');
	}
},function(){
	$(this).children('a').css('color','#3c3c3c');
	if($(this).children('div').length>0){
		$(this).removeClass('li-active');
		$(this).children('div').hide();
		$(this).css('border-color', berCol);
	}
});

$('.header-nav li>div a').hover(function(){
	$(this).css({'color':'#0088a4','background-color':'#e0f4ff'});
	$(this).children('span').css('text-decoration','underline');
},function(){
	$(this).css({'color':'#666','background-color':'#fff'});
	$(this).children('span').css('text-decoration','none');
});

$('.nav-more').hover(function(){
	$('.nav-more i').css('background-position-y','-29px');
	$('.more-list').show();
},function(){
	$('.nav-more i').css('background-position-y','-20px');
	$('.more-list').hide();
});

$('.fh-about').hover(function(){
	$('.fh-about i').css('background-position-y','0');
	$('.fh-list').show();
},function(){
	$('.fh-about i').css('background-position-y','-6px');
	$('.fh-list').hide();
});