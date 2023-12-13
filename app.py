from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/buscar", methods=["GET"])
def search_contact():
    return render_template('buscar.html')

@app.route("/insertar", methods=["GET", "POST"])
def create_contact():
    return render_template('insertar.html')

@app.route("/ver", methods=["GET"])
def details():
    return render_template('ver.html')

@app.route("/borrar", methods=["GET", "POST"])
def delete_contact():
    return render_template('borrar.html')

@app.route("/editar", methods=["GET", "POST"])
def update_contact():
    return render_template('editar.html')

@app.route("/login", methods=["GET", "POST"])
def login():
    return render_template('login.html')

@app.route("/signup", methods=["GET", "POST"])
def signup():
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)
