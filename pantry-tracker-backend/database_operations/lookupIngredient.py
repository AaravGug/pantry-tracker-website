from flask import Blueprint, request, jsonify
from sqlalchemy import text
from extensions import db


lookupIngredient_bp = Blueprint('lookupIngredient', __name__)

@lookupIngredient_bp.route('/lookup-ingredient', methods=['GET'])

def lookup_ingredient():
    query = request.args.get('query')
    if not query:
        return jsonify({'ingredients': []})
    try:
        result = db.session.execute(text('SELECT aliased_ingredient_name FROM ingredients WHERE aliased_ingredient_name ILIKE :query LIMIT 10'), {'query': f'%{query}%'})
        ingredients = [row[0] for row in result]

        result = db.session.execute(text('SELECT compound_ingredient_name FROM compound_ingredients WHERE compound_ingredient_name ILIKE :query LIMIT 4'), {'query': f'%{query}%'})
        coumpound_ingredients = [row[0] for row in result]

        all_ingredients = ingredients + coumpound_ingredients
        return jsonify({'ingredients': all_ingredients})
    except Exception as e:
        return jsonify({'error': str(e)}), 500