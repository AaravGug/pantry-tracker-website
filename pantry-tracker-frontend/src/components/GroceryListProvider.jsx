import { createContext, useState, useContext } from 'react';

const GroceryListContext = createContext();

export const useGroceryList = () => useContext(GroceryListContext);

const GroceryListProvider = ({ children }) => {
    const [refreshFlag, setRefreshFlag] = useState(false);

    const refreshGroceryList = () => setRefreshFlag(flag => !flag);

    return (
        <GroceryListContext.Provider value={{ refreshFlag, refreshGroceryList }}>
            {children}
        </GroceryListContext.Provider>
    );
};

export default GroceryListProvider;