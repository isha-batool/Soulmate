from .db import db


class User(db.Document):
    email = db.StringField()
    username = db.StringField()
    password = db.StringField()
    firstName = db.StringField()
    lastName = db.StringField()
    CNIC = db.StringField()
    countryCode = db.StringField()
    phoneNumber = db.StringField()
    profilePic = db.StringField()
    gender = db.StringField()
    height = db.StringField()
    cast = db.StringField()
    profession = db.StringField()
    religion = db.StringField()
    city = db.StringField()
    dob = db.StringField()


