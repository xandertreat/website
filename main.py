from fasthtml.common import *
from src.pyhtml.make_app import app, rt

# Splash Screen #
import src.pages.home
@rt("/")
def get_home():
    return src.pages.home.get()
  
serve()