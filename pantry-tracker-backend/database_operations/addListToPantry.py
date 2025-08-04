from extensions import db
from sqlalchemy import text
from flask import Blueprint, jsonify

addListToPantry_bp = Blueprint('addListToPantry', __name__)

@addListToPantry_bp.route('/add-list-to-pantry', methods=['POST'])

def addListToPantry():
    try:
        groceryListIngredients = db.session.execute(text('SELECT aliased_ingredient_name, quantity, unit_id FROM my_grocery_list WHERE quantity > 0')).fetchall()

        if not groceryListIngredients:
            return jsonify({'success': False, 'message': 'No ingredients to add.'}), 200
        
        for ingredient in groceryListIngredients:
            db.session.execute(text('UPDATE my_pantry SET quantity = quantity + :quantity, unit_id = :unit_id WHERE aliased_ingredient_name = :ingredientName'),
            {'quantity': ingredient.quantity, 'unit_id': ingredient.unit_id, 'ingredientName': ingredient.aliased_ingredient_name})
            
        db.session.commit()
        return jsonify({'success': True, 'message': 'Grocery List added to Pantry Successfully!'}), 200
        
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500