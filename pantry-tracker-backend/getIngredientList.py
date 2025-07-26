from flask import Blueprint, jsonify
from sqlalchemy import text
from extensions import db

getIngredientList_bp = Blueprint('getIngredientList', __name__)
@getIngredientList_bp.route('/get-ingredient-list', methods=['GET'])

def get_ingredient_list():
    try:
        result = db.session.execute(text('SELECT aliased_ingredient_name, quantity, units FROM my_pantry WHERE quantity > 0 ORDER BY aliased_ingredient_name'))
        ingredients = [{'name': row[0], 'quantity': row[1], 'units': row[2]} for row in result]
        return jsonify({'ingredients': ingredients})
    except Exception as e:
        return jsonify({'error': str(e)}), 500