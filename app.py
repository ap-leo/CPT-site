from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('cpt1.html')

@app.route('/noticia_1')
def noticia_1():
    return render_template('noticia_1.html')

@app.route('/formulario_visita')
def popup():
    return render_template('/formulario_visita.html')

if __name__ == '__main__':
    app.run()
