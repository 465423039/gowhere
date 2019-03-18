var portflag = true;
function toggle(){
	if(portflag){
		$('.port-toggler').css('background-position','0 0');
		$('.user-login').show();
		$('.qr-login').hide();
	}else{
		$('.port-toggler').css('background-position','-55px -60px');
		$('.qr-login').show();
		$('.user-login').hide();
	}
	portflag = !portflag;
}
$('.helpbar span').click(function(){
	toggle();
});
$('.port-toggler').click(function(){
	toggle();
});

$('.login-pwd .psw').click(function(){
	$(this).hide();
	$('.login-pwd input[type="password"]').focus();
});

$('.login-pwd input[type="password"]').blur(function(){
	if($(this).val() == ''){
		$('.login-pwd .psw').show();
	}
})

if($('.id-login input[type="radio"]').prop("checked")){
	$('.id-login label').css('font','bold 14px/14px "宋体"');
}

$('.id-login input[type="radio"]').click(function(){
	$('.id-login label').css('font','bold 14px/14px "宋体"');
	$('.sms-login label').css('font','normal 12px/12px "宋体"');
	$('.id-login-con').show();
	$('.sms-login-con').hide();
})
$('.sms-login input[type="radio"]').click(function(){
	$('.sms-login label').css('font','bold 14px/14px "宋体"');
	$('.id-login label').css('font','normal 12px/12px "宋体"');
	$('.sms-login-con').show();
	$('.id-login-con').hide();
})