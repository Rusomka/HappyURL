$(document).ready(function () {
    $.getJSON('/stat', (data) => {
        data.map((el) => {
            const url = el.url;
            const shortUrl = el.shortUrl;
            $('.table').append('<div class="row"><a class="td" href=url>' + url + '</a><a class="td" href={shortUrl}>' + shortUrl + '</a><div class="td">' + el.redirects + '</div><div class="td">' + el.lastAccess + '</div></div>');
        })
    });
});

