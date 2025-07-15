from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

load_dotenv("ApiKeys.env")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
db = SQLAlchemy(app)

CORS(app)

@app.route('/api/message')
def message():
    return jsonify({'message': 'Hello from Flask!'})

@app.route('/test-db')
def test_db():
    try:
        result = db.session.execute(text('SELECT aliased_ingredient_name FROM ingredients WHERE entity_id BETWEEN 0 AND 10'))
        names = [row[0] for row in result]
        namesString = ', '.join(names)
        return jsonify({'ingredient_names': namesString})
    except Exception as e:
        return jsonify({'error': str(e)}), 500