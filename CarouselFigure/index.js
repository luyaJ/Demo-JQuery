$(document).ready(function(){
    var i = 0;
    //增加第一张在末尾，让效果接近无缝轮播
    var clone = $("#images img").first().clone();
    $("#images").append(clone);

    //向左的按钮
    $("#arrow_left").on("click",function(){
        moveLeft();
    });
    function moveLeft(){
        i++; //i=1,2,3,4
        if(i == 5){  //最后一下i=5
            $("#images img").css({left:0});
            i = 0;
        }
        $("#images img").animate({left:-i*600},800);
        $("#circle span").eq(i).addClass("on").siblings().removeClass("on");
    }

    //向右的按钮
    $("#arrow_right").on("click",function () {
        moveRight();
    });
    function moveRight(){
        i--;
        if(i == -1){
            $("#images img").css({left:-3000});
            i = 4;
        }
        $("#images img").animate({left:-i*600},800);
        $("#circle span").eq(i).addClass("on").siblings().removeClass("on");
    }

    //自动动画--点击小圆圈
    $("#circle span").click(function () {
        var index = $(this).index();
        $(this).eq(i).addClass("on").siblings().removeClass("on");
        $("#images img").animate({left:-index*600},800);
    });


    //对定时器的操作
    var t = setInterval(moveLeft,2000);
    $("#container").hover(function(){
        clearInterval(t);
    },function(){
        t = setInterval(moveLeft,2000);
    });
});

