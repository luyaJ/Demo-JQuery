$(document).ready(function () {
    $(".tab li").click(function () {
        var i = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".content-wrap div").hide().eq(i).show();
    });
});