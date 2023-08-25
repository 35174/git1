

$(document).ready(() => {
    $('#uploadButton').click(function() {
        const formData = new FormData($('#upload-form')[0]);

        $.ajax({
            url: '/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                $('#messageBox').html('<p class="success-message">' + response + '</p>');
            },
            error: function() {
                $('#messageBox').html('<p class="error-message">An error occurred. Please try again later.</p>');
            }
        });
    });
});
