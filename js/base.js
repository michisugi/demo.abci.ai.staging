function google_search() {
    var query = document.getElementById("google-search").value;
    window.open("https://www.google.com/search?q=" + query + "+site:" + "https%3A%2F%2Fabci.ai%2F");
}

jQuery(function($) {

    var topBtn = $('#pageTop');
    topBtn.hide();

    $(window).scroll(function() {
        scrollHeight = $(document).height() - $("#footer").height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        var footerheight = $("footer").innerHeight();

        if (scrollHeight <= scrollPosition) {
            $("#pageTop").css({
                "position": "relative"
            });
        } else {
            $("#pageTop").css({
                "position": "fixed",
                "bottom": "0",
                "left": "0",
                "width": "100%"
            });
        }

        if ($(this).scrollTop() > 80) {
            topBtn.fadeIn("fast");
        } else {
            topBtn.fadeOut("fast");
        }
    });


    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    var menu = $("#nav_wrap");

    $("#menu_btn").click(function() {

        if (menu.css("display") == "none") {
            menu.not(":animated").slideDown("fast");
            $("#menu_btn").addClass('active');
            scrollpos = $(window).scrollTop();
            $('body').addClass('sp_fixed').css({
                'top': -scrollpos
            });
        } else {
            menu.not(":animated").slideUp("fast");
            $("#menu_btn").removeClass('active');
            $('body').removeClass('sp_fixed').css({
                'top': 0
            });
            window.scrollTo(0, scrollpos);
        }
        return false;
    });

    $(window).on('load resize scroll', function() {
        var w = $(window).width();
        var nav_h = $(window).outerHeight() - 70;

        $("#menu_btn").removeClass('active');
        if (w < 641) {
            $("#nav_wrap").not(":animated").slideUp("fast");
            $("#nav_wrap").css("height", nav_h);
            $("#nav li strong").on('click', function() {
                var sub_nav = $(this).next("ul");

                if (sub_nav.css("display") == "none") {
                    sub_nav.not(":animated").slideDown("fast");
                    $(this).addClass('active');
                } else {
                    sub_nav.not(":animated").slideUp("fast");
                    $(this).removeClass('active');
                }
                return false;
            });

        } else {
            $("#nav li strong").off('click');
            $('#nav_wrap,#nav li strong,#body,#nav li ul,#side_menu').removeAttr("style");
            $("#menu_btn").removeClass('active');
            $('body').removeClass('sp_fixed');
        }

    });

    $("#sub_menu_select").click(function() {

        if ($("#side_menu").css("display") == "none") {
            $("#side_menu").slideDown("fast");
            $(this).addClass('active');
        } else {
            $("#side_menu").slideUp("fast");
            $(this).removeClass('active');
        }
        return false;
    });

});