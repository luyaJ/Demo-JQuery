var containerWidth = $('.swiper').width();
var index = 0;

$('.pot').click(function() {
  index= $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  $('.img-wrapper').animate({ left: -index*containerWidth });
});

var offsetLeft = $('.img-wrapper').css('left');  // 获取当前left值
function animation() {
  if (offsetLeft == '0px') {
    index = 1;
    $('.img-wrapper').animate({ left: '-300px' });
    $('.pot').eq(index).addClass('active').siblings().removeClass('active');
    offsetLeft = '-300px';
  } else if (offsetLeft == '-300px') {
    index = 0;
    $('.img-wrapper').animate({ left: '0px' });
    $('.pot').eq(index).addClass('active').siblings().removeClass('active');
    offsetLeft = '0px';
  }
}

var t = setInterval(animation, 3000);
$('.swiper').hover(function() {
  clearInterval(t);
}, function() {
  t = setInterval(animation, 3000);
});