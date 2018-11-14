$(window).on('load resize scroll', function (e) {
    if (document.body.clientWidth >= 1344) {
        var col1 = document.getElementById('left_column').offsetHeight;
        var col2 = document.getElementById('center_column').offsetHeight;
        var col3 = document.getElementById('right_column').offsetHeight;

        var travel1 = Math.abs(col2 - col1);
        var travel3 = Math.abs(col2 - col3);

        var height = $(window).innerHeight();
        var topOfColumns = $('.parallax').offset().top;
        var columns = $('.parallax').outerHeight() - height;
        console.log(columns);
        var scrollInterval1 = columns / travel1;
        var scrollInterval3 = columns / travel3;

        var scrolltop = $(window).scrollTop();
        var distance = scrolltop - topOfColumns;

        var a1 = Math.ceil(distance / scrollInterval1);
        var b1 = scrolltop >= $('#left_column').offset().top + col1 - height;

        var a3 = Math.ceil(distance / scrollInterval3);
        var b3 = scrolltop >= $('#right_column').offset().top + col3 - height;

        if (scrolltop >= topOfColumns && b1 === false) {
            $('#left_column').css({
                '-webkit-transform': 'translate3d(0px, ' + a1 + 'px, 0px)',
                transform: 'translate3d(0px, ' + a1 + 'px, 0px)'
            })
            ;
        } else if (distance <= 0) {
            $('#left_column').css({
                '-webkit-transform': 'translate3d(0px, 0px, 0px)',
                transform: 'translate3d(0px, 0px, 0px)'
            });
        }
        if (scrolltop >= topOfColumns && b3 === false) {
            $('#right_column').css({
                '-webkit-transform': 'translate3d(0px, ' + a3 + 'px, 0px)',
                transform: 'translate3d(0px, ' + a3 + 'px, 0px)'
            });
        } else if (distance <= 0) {
            $('#right_column').css({
                '-webkit-transform': 'translate3d(0px, 0px, 0px)',
                transform: 'translate3d(0px, 0px, 0px)'
            });
        }
    }
});
