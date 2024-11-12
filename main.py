from fasthtml.common import serve
from src.pyhtml.make_app import app, rt # noqa

# Splash Screen #
import src.pages.home
@rt("/")
def get_home():
    return src.pages.home.get()
  
serve()