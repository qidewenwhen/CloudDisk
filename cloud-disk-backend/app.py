from flask import Flask, jsonify, request
from itsdangerous import (TimedJSONWebSignatureSerializer as URLSafeSerializer, BadSignature, SignatureExpired)
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config.from_object('config')

CORS(app)

def verify_auth_token(token):
    s = URLSafeSerializer(app.config['SECRET_KEY'])
    try:
        data = s.loads(token)
    except SignatureExpired:
        return False
    except BadSignature:
        return False
    return 'key' in data and data['key'] == app.config['SECRET_KEY']

def test_authorization():
    cookies = request.cookies
    headers = request.headers
    args = request.args
    token = None
    if 'token' in cookies:
        token = cookies['token']
    elif 'Authorization' in headers:
        token = headers['Authorization']
    elif 'token' in args:
        token = args['token']
    else:
        return False

    return verify_auth_token(token)

def authorization_required(f):
    def wrapper(*args, **kwargs):
        if not test_authorization():
            return jsonify(message = 'unauthorized'), 401
        return f(*args, **kwargs)
    return wrapper

@app.route('/login', methods = ['POST'])
def login():
    req = request.get_json()
    if (req['email'] == app.config['EMAIL'] and req['password'] == app.config['PASSWORD']):
        s = URLSafeSerializer(app.config['SECRET_KEY'], expires_in = 7 * 24 * 3600)
        return jsonify(message = 'ok', token = s.dumps({'key': app.config['SECRET_KEY']}).decode('utf-8'))
    else:
        return jsonify(message = 'unauthorized'), 401

@app.route('/auth', methods = ['GET'])
@authorization_required
def auth():
    return jsonify(message = 'ok')

if __name__ == '__main__':
    app.run(debug = True)