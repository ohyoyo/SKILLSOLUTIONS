$(document).ready(function () {
    $('#burger').click(function () {
        this.classList.toggle('active');
        if (this.className == 'active') {
            $('header nav ul').fadeIn('low');
        } else {
            $('header nav ul').fadeOut('low');
        }
    });
});
