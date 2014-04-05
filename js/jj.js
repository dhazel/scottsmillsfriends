
$(document).ready(function () {
    $('ul.nav > li').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $( $(this).find('a').attr('href') ).siblings().hide();
        $( $(this).find('a').attr('href') ).fadeIn();
    });
});
