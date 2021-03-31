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
        range = int(request.form.get('range', 0))

        if 10 <= range <= 20:
            return render_template('powers.html', max_power=range)

        return render_template('choose.html', error='Проверьте правильность заполнения полей!')

    system_from = int(request.form.get('system-from', 0))
    system_to = int(request.form.get('system-to', 0))

    if 2 <= system_from <= 36 and 2 <= system_to <= 36 and system_from != system_to:
        return render_template('systems.html', system_from=system_from, system_to=system_to)

    return render_template('choose.html', error='Проверьте правильность заполнения полей!') 


if __name__ == '__main__':
    app.run(debug=False, port=5000)