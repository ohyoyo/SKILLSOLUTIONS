$(document).ready(function () {
    $('#burger').click(function () {
        this.classList.toggle('active');
        if (this.className == 'active') {
            $('body').css('overflow', 'hidden');
            $('header nav ul').fadeIn('low');
        } else {
            $('header nav ul').fadeOut('low');
            $('body').css('overflow', 'visible');
        }
    });
});