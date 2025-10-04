from flask import Flask, make_response, request, session, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
from dotenv import load_dotenv
import os
import jwt

load_dotenv()

app = Flask(__name__)
CORS(app,
     origins=['https://www.revoltev.org', 'http://localhost:3000'],
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     expose_headers=["Set-Cookie"])

app.secret_key = os.getenv("SECRET_KEY", "Sup3rS3cr3tK3y")
JWT_SECRET = os.getenv("JWT_SECRET", "AnotherSup3rS3cr3t")

app.config.update(
    SESSION_COOKIE_NAME="session",
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='None',  # Use 'None' + Secure=True for HTTPS | Lax
    SESSION_COOKIE_SECURE=True,    # True if using HTTPS | False
    SESSION_COOKIE_DOMAIN='.revoltev.org',
    PERMANENT_SESSION_LIFETIME=timedelta(hours=1)
)

users = {os.getenv("USER"): os.getenv("PASS")}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    
    # Validate credentials (replace with your logic)
    if username == os.getenv("USER") and password == os.getenv("PASS"):
        # Create JWT token
        token = jwt.encode(
            {"username": username, "exp": datetime.utcnow() + timedelta(hours=2)},
            JWT_SECRET,
            algorithm="HS256"
        )
        
        # Set cookie for frontend domain
        resp = make_response({"success": True})
        resp.set_cookie(
            "session", token,
            httponly=True,
            samesite="None",  # allow cross-site
            secure=True,      # only for https
            max_age=2*60*60
        )
        return resp
    return jsonify({"success": False, "error": "Invalid credentials"}), 401

@app.route('/logout', methods=['POST'])
def logout():
    # resp = make_response({"success": True})
    # resp.set_cookie(
    #     "session", "",
    #     expires=0,           # expire immediately
    #     httponly=True,
    #     samesite="None",
    #     secure=True,
    #     domain='.revoltev.org'
    # )
    # return resp
    
    # Clear Flask session
    session.clear()

    # Create response
    response = make_response(jsonify({"success": True, "message": "Logged out"}))

    # Overwrite/delete cookie
    response.set_cookie(
        "session",
        "",
        expires=0,
        httponly=True,
        samesite="None",
        secure=True
    )

    return response

@app.route('/check', methods=['GET'])
def check():
    token = request.cookies.get("session")  # get JWT from cookie
    if not token:
        return jsonify({"logged_in": False, "error": "No session token"}), 401

    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        # You can access payload["username"] here if needed
        return jsonify({"logged_in": True, "user": payload["username"], "exp": payload["exp"]})
    except jwt.ExpiredSignatureError:
        return jsonify({"logged_in": False, "error": "Token expired"}), 401
    except jwt.InvalidTokenError as e:
        return jsonify({"logged_in": False, "error": f"Invalid token {str(e)}"}), 401

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy", "timestamp": datetime.utcnow().isoformat()})

# if __name__ == '__main__':
#     app.run(debug=True)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)