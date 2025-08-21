from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from database_operations.lookupIngredient import lookupIngredient_bp
from database_operations.getIngredientList import getIngredientList_bp
from database_operations.modifyIngredientEntry import modifyIngredientEntry_bp
from database_operations.getGroceryList import getGroceryList_bp
from database_operations.modifyGroceryListEntry import modifyGroceryListEntry_bp
from database_operations.addListToPantry import addListToPantry_bp
from database_operations.emptyGroceryList import emptyGroceryList_bp
from extensions import db

load_dotenv("ApiKeys.env")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
db.init_app(app)

# origins = os.getenv("ALLOWED_ORIGINS", "")
# allowed_origins = origins.split(",") if origins else []
# allowed_origins.append("http://localhost:3000")

CORS(app, resources={r"/*": {
    "origins": os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    "methods": os.getenv("CORS_METHODS", "GET,POST,PUT,DELETE,OPTIONS").split(","),
    "allow_headers": os.getenv("CORS_HEADERS", "Content-Type").split(",")
}})
# CORS(app, origins=allowed_origins)

app.register_blueprint(lookupIngredient_bp)

app.register_blueprint(getIngredientList_bp)

app.register_blueprint(modifyIngredientEntry_bp)

app.register_blueprint(getGroceryList_bp)

app.register_blueprint(modifyGroceryListEntry_bp)

app.register_blueprint(addListToPantry_bp)

app.register_blueprint(emptyGroceryList_bp)


if __name__ == "__main__":
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port)


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