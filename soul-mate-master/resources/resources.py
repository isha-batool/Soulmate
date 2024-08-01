from flask import request, Response, jsonify
from flask_restful import Resource
from database.models import User


class UserApi(Resource):
    def get(self):
        status = 200
        data = User.objects.to_json()
        print(data)
        # if data == '[]':
        #     status = 404
        return Response(data, mimetype="application/json", status=status)
    def post(self):
        status = 200
        data = request.get_json()
        usr = User(**data)
        usr.save()
        return 200

