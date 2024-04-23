from flask import Flask, render_template, request
import requests
from datetime import date

app = Flask(__name__)

API_URL = 'https://api.sunrisesunset.io/json'

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        location = request.form['location']
        latitude, longitude = location.split(',')
        today = date.today().isoformat()  # Get the current date
        params = {
            'lat': latitude,
            'lng': longitude,
            'date': today,  # Use the current date
            'formatted': 0
        }
        response = requests.get(API_URL, params=params)
        data = response.json()
        if 'results' in data:
            sunrise = data['results']['sunrise']
            sunset = data['results']['sunset']
        else:
            sunrise = sunset = "Data not available"
        return render_template('index.html', sunrise=sunrise, sunset=sunset)
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
