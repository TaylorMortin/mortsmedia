(function($) {
    $(".contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 2
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mail.php",
                success: function() {
                    $(".contact-form").resetForm();
                    $(".success").slideDown("slow");
                },
                error: function() {
                    $(".error").slideDown("slow");
                }
            });
        }
    });    
})(jQuery);

