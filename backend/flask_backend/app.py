from flask import Flask, request, session, jsonify
from flask_cors import CORS
from datetime import timedelta
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app,
     origins=['https://www.revoltev.org'],
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     expose_headers=["Set-Cookie"])

app.secret_key = 'Sup3rS3cr3tK3y'

# app.config.update(
#     SESSION_COOKIE_HTTPONLY=True,
#     SESSION_COOKIE_SAMESITE='Lax',  # Use 'None' + Secure=True for HTTPS
#     SESSION_COOKIE_SECURE=False,    # True if using HTTPS
#     PERMANENT_SESSION_LIFETIME=timedelta(hours=1)
# )

app.config.update(
    SESSION_COOKIE_NAME="session",
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='None',  # Use 'None' + Secure=True for HTTPS
    SESSION_COOKIE_SECURE=True,    # True if using HTTPS
    PERMANENT_SESSION_LIFETIME=timedelta(hours=1)
)

users = {os.getenv("USER"): os.getenv("PASS")}

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

# if __name__ == '__main__':
#     app.run(debug=True)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)