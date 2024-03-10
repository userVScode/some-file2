import eel

eel.init('web')
i = 0

@eel.expose
def get_variable_i():
    return i

eel.start("main.html", size=(700, 700))
