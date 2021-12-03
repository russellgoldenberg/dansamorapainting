(function() {
    var $htmlBody = $('html, body');
    var $window = $(window);
    
    $('.scroll-btn').on('click', function(e){
        e.preventDefault();

        var target = $(this).attr('href');
        
        $htmlBody.animate({
            scrollTop: $(target).offset().top
        }, 400);
        
        return false;
    
    });

    $('#quote-form').submit(function(e){
        e.preventDefault();

        $.post('../email.php', {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            project: $('#project').val()
        }, function(response) {
            if(console && console.log) {
                alert(response);
            }
        });

        $(this).find('input').val('');
        $(this).find('textarea').val('');

        return false;
    });
})();