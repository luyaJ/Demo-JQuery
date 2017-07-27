$(document).ready(function () {

    var panels = $("#accordion > dd").hide();

    $("dt > a").click(function () {
        panels.slideUp()
        $(this).parent().next().slideDown();
        return false;
    });
});