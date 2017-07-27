$(document).ready(function () {

    var a1 = false;
    var a2 = false;
    var a3 = false;
    var a4 = false;

    $(".content").on("mousedown touchstart",function () {
        if(!a1){
            $(this).find(".hat").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550)",
                transform:"translate(20px,-80px)",
                background:"transparent",
                color:"transparent"
            });
        } else {
            $(this).find(".hat").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550)",
                transform:"translate(0px,40px)",
                background:"silver",
                color: "#fff"
            });
        }

        if(!a2){
            $(this).find(".user").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550) .2s",
                transform:"translate(20px,-80px)",
                background:"transparent",
                color:"transparent"
            });
        } else {
            $(this).find(".user").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550) .2s",
                transform:"translate(65px,30px)",
                background:"silver",
                color: "#fff"
            });
        }

        if(!a3){
            $(this).find(".envelope").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550) .4s",
                transform:"translate(20px,-80px)",
                background:"transparent",
                color:"transparent"
            });
        } else {
            $(this).find(".envelope").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550) .4s",
                transform:"translate(120px,-10px)",
                background:"silver",
                color: "#fff"
            });
        }

        if(!a4){
            $(this).find(".code").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550) .6s",
                transform:"translate(20px,-80px)",
                background:"transparent",
                color:"transparent"
            });
        } else {
            $(this).find(".code").css({
                transition:"all 500ms cubic-bezier(0.680,-0.550,0.265,1.550) .6s",
                transform:"translate(160px,-65px)",
                background:"silver",
                color: "#fff"
            });
        }

        a1 = !a1;
        a2 = !a2;
        a3 = !a3;
        a4 = !a4;
    });

});


