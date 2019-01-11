document.addEventListener('DOMContentLoaded', function() {
    $.ajax({
        url: 'https://raw.githubusercontent.com/danielsen/a-darker-shade-of-slack/master/css/black.css',
        success: function(css) {
            $("<style></style>").appendTo('head').html(css);
        }
    });
});
