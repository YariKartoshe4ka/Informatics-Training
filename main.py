from flask import Flask, request, render_template


app = Flask(__name__, static_folder='static')


@app.route('/')
def index_page():
    return render_template('index.html')


@app.route('/choose', methods=['GET', 'POST'])
def choose_page():
    if request.method == 'GET':
        return render_template('choose.html')

    if request.form.get('type') == 'powers':
        return render_template('powers.html', max_power=int(request.form.get('range')))

    return render_template('choose.html', error='Проверьте правильность заполнения полей!') 