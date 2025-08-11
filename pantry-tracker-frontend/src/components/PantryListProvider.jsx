import { createContext, useState, useContext } from 'react';

const PantryListContext = createContext();

export const usePantryList = () => useContext(PantryListContext);

const PantryListProvider = ({ children }) => {
    const [refreshFlag, setRefreshFlag] = useState(false);

    const refreshPantryList = () => setRefreshFlag(flag => !flag);

    return (
        <PantryListContext.Provider value={{ refreshFlag, refreshPantryList }}>
            {children}
        </PantryListContext.Provider>
    );
};

export default PantryListProvider;