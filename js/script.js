$(document).ready(function(){
$('<link rel="stylesheet" href="http://ptlands.pro/ortoplast_5/files/yved/style.css">').appendTo('head');
var i = 0;
function yved(){
i=1;
$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
}
setTimeout(function(){
setInterval(
function(){
i=i+1;
if(i>10) i=1;//10 - количество уведомлений
$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
},30000);//25000 - задержка в мс меду показами уведомлений
yved();
},10000);//10000 - задержка в мс перед показом первого уведомления
});