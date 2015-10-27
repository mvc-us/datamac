import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Welcome to DataMAC'

@app.route('/index.html')
@app.route('/analytics')
def dashboard():
    return render_template('index.html')

@app.route('/details')
@app.route('/details.html')
def details():
	return render_template('details.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('login.html'), 404