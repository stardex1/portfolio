let dot = $("#dot > ul > li");
let cont = $(".contents > div");
let nav_btn = $(".nav");
let times_btn = $(".times");
    
    nav_btn.click(function (e) {
        e.preventDefault();
    });

    times_btn.click(function (e) {
        e.preventDefault();
    });
    
    dot.click(function (e) {
        e.preventDefault();
        let target = $(this);
        let index = target.index();
        //alert(index);
        let section = cont.eq(index);
        let offset = section.offset().top;
        $("html,body").animate({
            scrollTop: offset
        }, 600, "easeInOutExpo");
    });

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll >= cont.eq(0).offset().top - $(window).height() / 3) {
        dot.removeClass("active");
        dot.eq(0).addClass("active");
    }
    if (wScroll >= cont.eq(1).offset().top - $(window).height() / 3) {
        dot.removeClass("active");
        dot.eq(1).addClass("active");
    }
    if (wScroll >= cont.eq(2).offset().top - $(window).height() / 3) {
        dot.removeClass("active");
        dot.eq(2).addClass("active");
    }
    if (wScroll >= cont.eq(3).offset().top - $(window).height() / 3) {
        dot.removeClass("active");
        dot.eq(3).addClass("active");
    }

    //Text animation
    if (wScroll >= cont.eq(0).offset().top) {
        cont.eq(0).addClass("show");
    }
    if (wScroll >= cont.eq(1).offset().top) {
        cont.eq(1).addClass("show");
    }
    if (wScroll >= cont.eq(2).offset().top) {
        cont.eq(2).addClass("show");
    }
    if (wScroll >= cont.eq(3).offset().to) {
        cont.eq(3).addClass("show");
    }
});
