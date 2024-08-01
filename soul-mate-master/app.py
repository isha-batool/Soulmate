from flask import Flask, render_template, request, session
from flask_session import Session
from flask_mongoengine import MongoEngine
from database import db
from resources import routes
from flask_restful import Api, Resource

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost:27017/soulMate'
}
api = Api(app)
db.initialize_db(app)
routes.initialize_route(api)

@app.route('/home.html')
def home():  # put application's code here
    return render_template("home.html")


@app.route('/profile.html')
def profile():
    return render_template("profile.html")

@app.route('/connection.html')
def connections():
    return render_template("connection.html")
if __name__ == '__main__':
    app.run()
