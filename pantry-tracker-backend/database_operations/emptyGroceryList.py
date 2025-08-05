from extensions import db
from sqlalchemy import text
from flask import Blueprint, jsonify

emptyGroceryList_bp = Blueprint('emptyGroceryList', __name__)

@emptyGroceryList_bp.route('/empty-grocery-list', methods=['POST'])

def emptyGroceryList():
    try:
        db.session.execute(text('UPDATE my_grocery_list SET quantity = 0 WHERE quantity > 0'))
        db.session.commit()
        return jsonify({'success': True, 'message': 'Grocery List Emptied Successfully'}), 200
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500