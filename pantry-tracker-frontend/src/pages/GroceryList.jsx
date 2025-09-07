import '../styles/pantry-and-grocery.css';
import GroceryListPageHeader from '../components/GroceryListPageHeader';
import GroceryIngredientList from '../components/GroceryIngredientList'
import GroceryListProvider from '../components/GroceryListProvider'
import LoggedInCheck from '../utils/LoggedInCheck';

const GroceryList = () => {
    return (
        <>
            <LoggedInCheck />
            <div className="grocery-list-page">
                <h1> Build your grocery list!</h1>
                <GroceryListProvider>
                    <GroceryListPageHeader />
                    <GroceryIngredientList />
                </GroceryListProvider>
            </div>
        </>

    )
}

export default GroceryList;