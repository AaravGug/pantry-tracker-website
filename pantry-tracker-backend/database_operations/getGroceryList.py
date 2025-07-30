from flask import Blueprint, jsonify
from sqlalchemy import text
from extensions import db

getGroceryList_bp = Blueprint('getGroceryList', __name__)
@getGroceryList_bp.route('/get-grocery-list', methods=['GET'])

def get_grocery_list():
    try:
        result = db.session.execute(text('SELECT gl.aliased_ingredient_name, gl.quantity, u.unit_name FROM my_grocery_list gl JOIN units u ON gl.unit_id = u.id WHERE gl.quantity > 0 ORDER BY gl.aliased_ingredient_name'))
        ingredients = [{'name': row[0], 'quantity': row[1], 'unitID': row[2]} for row in result]
        return jsonify({'ingredients': ingredients})
    except Exception as e:
        return jsonify({'error': str(e)}), 500