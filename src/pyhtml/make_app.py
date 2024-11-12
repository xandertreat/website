from fasthtml.common import * # noqa

description = 'FTAC Utility'

app, rt = fast_app(hdrs=[
    Meta(charset='UTF-8'),
    Meta(name='viewport', content='width=device-width, initial-scale=1.0, maximum-scale=1.0'),
    Meta(name='description', content=description),
    *Favicon('favicon.ico', 'favicon.ico'),
    *Socials(title='TBD',
        description=description,
        site_name='TBD',
        image=f'', 
        url='TBD'),
    # [Styling] #
    Link(rel='stylesheet', href='css/fonts.css'), # Fonts
    Link(rel='stylesheet', href='css/main.css'), # CSS
    Script(src="js/tailwind/tailwind.js"), # Tailwind
    Script(src="js/tailwind/config.js"), # Config
    Link(rel='stylesheet', href='css/daisy-ui/daisy-ui.css'), # DaisyUI
    Link(rel='stylesheet', href='css/daisy-ui/themes.css'), # Theming
    Script(src="js/icon.js"), # Iconify
    Html(data_theme='ftac') # Theme
], default_hdrs=False)
