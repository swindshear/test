$(function () {

    $(".fixedtool li").click(function () {
        console.log($(this).index());
        var current = $("div").eq($(this).index()).offset().top+1;
        $("body,html").stop().animate({
            scrollTop: current
        });
        //$(this).addClass("current").siblings().removeClass();
    });

    $(window).scroll(function () {
        $(".a").each(function (i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
            }
        })
    });
})