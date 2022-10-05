$(document).ready(function () {
    $('.form input, #reset-button').hide().show(500);
    $('#btn').on('click', () => {
        $.ajax({
            type: "POST",
            url: "/shorten",
            contentType: "application/json",
            data: JSON.stringify({url: $('.form input').val()}),
            dataType: "json",
            success: (data) => {
             $('#reset-button').attr('href',data.shortUrl).text(data.shortUrl);
            }
        })
    });
});
