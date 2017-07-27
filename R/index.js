$(document).ready(function () {
    animate();
    $(".mid").click(animate).mouseover(function () {
        $(".mid").css("background-color","#aa5");
    }).mouseout(function () {
        $(".mid").css("background-color","salmon");
    });
});
function animate() {
    $("div>div>div").each(function () {
        $(this).css({
            position:'relative',
            top:'-200px',
            opacity:0
        });
        var wait = Math.floor(Math.random()*3000+1);
        $(this).delay(wait).animate({
            top:'0px',
            opacity:1,
        },1000);
    });
}