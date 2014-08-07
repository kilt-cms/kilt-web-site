var kilt = {

    init: function() {

        var docTop = $('#documentation').offset().top - 30,
            menu   = $('#documentation .menu');

        $(window).on('scroll', function() {
            if ($(document).scrollTop() >= docTop) {
                menu.addClass('fixed');
            } else {
                menu.removeClass('fixed');
            }
        });

        menu.find('a').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 400);
        });

        $('body').scrollspy({
            target: '#spy-target'
        });
    }

};