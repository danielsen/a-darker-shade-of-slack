# a-darker-shade-of-slack
Dark themes for the Slack desktop client

### Installing

Edit `/usr/lib/slack/resources/app.asar.unpacked/src/staticssb-interop.js`
and append the following Javascript. 

    document.addEventListener('DOMContentLoaded', function() {
        $.ajax({
            url: 'https://raw.githubusercontent.com/danielsen/a-darker-shade-of-slack/master/css/black.css',
            success: function(css) {
                $("<style></style>").appendTo('head').html(css);
            }
        });
    });

Restart the Slack client to see the changes.

### Caveats

- This works for the linux client and should work with others though it's not tested.
- Updates will overwrite this change so it needs to be done after every update
- **Don't load CSS from sources you can't control. If you stumbled across this 
repository and want to use the theme, fork it and change the URL in the JS to your own.**

### Credits

Based upon work from the following:

- [widget-/slack-black-theme](https://github.com/widget-/slack-black-theme)
- [laCour/slack-night-mode](https://github.com/laCour/slack-night-mode)
