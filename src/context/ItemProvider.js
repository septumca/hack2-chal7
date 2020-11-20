import React, { useState } from 'react';
import ItemContext from './ItemContext';

export default function ItemProvider({ children }) {
    const [ items, setItems ] = useState(null);

    return (
        <ItemContext.Provider
            value={{
                items,
                setItems
            }}
        >
            {children}
        </ItemContext.Provider>
    );
}