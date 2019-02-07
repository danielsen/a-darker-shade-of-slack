# a-darker-shade-of-slack
Dark themes for the Slack desktop client

### Installing

1. Edit the Slack app's `ssb-interop.js` file and append the following Javascript. File locations for `ssb-interop.js` are provided below.

```javascript
    document.addEventListener('DOMContentLoaded', function() {
        $.ajax({
            url: 'https://raw.githubusercontent.com/danielsen/a-darker-shade-of-slack/master/css/black.css',
            success: function(css) {
                $("<style></style>").appendTo('head').html(css);
            }
        });
    });
```

2. Restart the Slack client to see the changes.

### Caveats

- This works for the linux client and should work with others though it's not tested.
- Updates will overwrite this change so it needs to be done after every update
- **Don't load CSS from sources you can't control. If you stumbled across this 
repository and want to use the theme, fork it and change the URL in the JS to your own.**

### ssb-interop.js File Locations

- Linux: `/usr/lib/slack/resources/app.asar.unpacked/src/staticssb-interop.js` 
- Mac: `/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js`

### Credits

Based upon work from the following:

- [widget-/slack-black-theme](https://github.com/widget-/slack-black-theme)
- [laCour/slack-night-mode](https://github.com/laCour/slack-night-mode)
