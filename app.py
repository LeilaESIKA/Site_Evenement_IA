from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Ensure the images directory exists
#
os.makedirs(os.path.join('static', 'images'), exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)