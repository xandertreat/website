from fasthtml.common import Div, Span

def get():
    return Div()(
        Span()("Home")
    )