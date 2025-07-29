from flask import Blueprint, jsonify
from sqlalchemy import text
from extensions import db

getIngredientList_bp = Blueprint('getIngredientList', __name__)
@getIngredientList_bp.route('/get-ingredient-list', methods=['GET'])

def get_ingredient_list():
    try:
        result = db.session.execute(text('SELECT mp.aliased_ingredient_name, mp.quantity, u.unit_name FROM my_pantry mp JOIN units u ON mp.unit_id = u.id WHERE mp.quantity > 0 ORDER BY mp.aliased_ingredient_name'))
        ingredients = [{'name': row[0], 'quantity': row[1], 'unitID': row[2]} for row in result]
        return jsonify({'ingredients': ingredients})
    except Exception as e:
        return jsonify({'error': str(e)}), 500