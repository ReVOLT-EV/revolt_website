from flask import Flask, request, session, jsonify
from flask_cors import CORS
from datetime import timedelta

app = Flask(__name__)
CORS(app,
     origins=['http://localhost:3000'],
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     expose_headers=["Set-Cookie"])

app.secret_key = 'supersecretkey'

app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Lax',  # Use 'None' + Secure=True for HTTPS
    SESSION_COOKIE_SECURE=False,    # True if using HTTPS
    PERMANENT_SESSION_LIFETIME=timedelta(hours=1)
)

users = {'admin': 'password123'}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if users.get(data['username']) == data['password']:
        session['user'] = data['username']
        return jsonify({'message': 'Logged in'}), 200
    return jsonify({'message': 'Invalid'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'message': 'Logged out'})

@app.route('/check', methods=['GET'])
def check():
    user = session.get('user')
    if user:
        return jsonify({'loggedIn': True, 'user': user})
    return jsonify({'loggedIn': False})

if __name__ == '__main__':
    app.run(debug=True)