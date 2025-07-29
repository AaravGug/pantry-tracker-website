import { useState } from 'react';
import ModifyIngredientPopup from './ModifyIngredientPopup';

const BuildIngredientListNames = ({ ingredientList }) => {
  const [selectedIngredientName, setSelectedIngredientName] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <ul>
        {ingredientList?.map((name, index) => (
          <li key={index} onClick={() => {
            setSelectedIngredientName(name);
            setShowPopup(true);
          }}>{name}</li>
        ))}
      </ul>
      {showPopup && <ModifyIngredientPopup ingredientName={selectedIngredientName} purpose={'Add'} onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default BuildIngredientListNames;