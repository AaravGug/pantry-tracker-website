import AddListToPantryPopupConfirm from '../utils/AddListToPantryPopupConfirm';
import { useGroceryList } from './GroceryListProvider';

const AddListToPantryPopup = ({ onClose }) => {
    const { refreshGroceryList } = useGroceryList();

    const confirmButtonHandler = async () => {
        const wasSuccessful = await AddListToPantryPopupConfirm();

        if (wasSuccessful) {
            refreshGroceryList();
        }
        onClose();
    }

    return (
    <div className="popup-window">
        <div className="popup-content">
            <div className='popup-header'>
                <h2>Confirmation</h2>
                <p>Are you sure you want to add your grocery list to your pantry?</p>
            </div>
            <div className='popup-bottom-buttons'>
                <button className='popup-bottom-buttons' onClick={confirmButtonHandler}>Confirm</button>
                <button className='popup-bottom-buttons' onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
    );
};

export default AddListToPantryPopup;