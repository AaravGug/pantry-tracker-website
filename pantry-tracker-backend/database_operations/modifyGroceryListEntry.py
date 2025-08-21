from extensions import db
from sqlalchemy import text
from flask import Blueprint, request, jsonify

modifyGroceryListEntry_bp = Blueprint('modifyGroceryListEntry', __name__)

@modifyGroceryListEntry_bp.route('/modify-grocery-list-entry', methods=['POST'])

def modify_grocery_list_entry():
    data = request.get_json()
    ingredientName = data.get('ingredientName')
    quantity = data.get('quantity')
    units = data.get('units')

    try:
        isIngredient = db.session.execute(text('SELECT aliased_ingredient_name FROM my_grocery_list WHERE aliased_ingredient_name ILIKE :ingredientName'), {'ingredientName': f'%{ingredientName}%'}).fetchone()
        unitID = db.session.execute(text('SELECT id FROM units WHERE unit_name = :units'), {'units': units}).scalar()
        if (isIngredient):
            db.session.execute(text('UPDATE my_grocery_list SET quantity = :quantity, unit_id = :unitID WHERE aliased_ingredient_name = :ingredientName'), {'quantity': quantity, 'unitID': unitID, 'ingredientName': ingredientName})
            db.session.commit()
        else:
            return jsonify({'error': 'Ingredient not found'}), 404
        
        return jsonify({'message': 'Ingredient entry modified successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500