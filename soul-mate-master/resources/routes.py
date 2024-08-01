from .resources import UserApi

def initialize_route(api):
    api.add_resource(UserApi, '/api/Users')

