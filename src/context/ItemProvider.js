import React, { useCallback, useEffect, useState } from 'react';
import ItemContext from './ItemContext';
import { useServiceCall } from '../services/hooks';
import { getAbilities } from '../services/services';

export default function ItemProvider({ children }) {
    const serviceCall = useServiceCall();
    const [ abilities, setAbilities ] = useState(null);

    const loadAbilities = useCallback(async () => {
        const abilitiesResponse = await serviceCall(getAbilities());
        setAbilities(abilitiesResponse);
    }, [setAbilities, serviceCall])

    useEffect(() => {
        loadAbilities();
    }, [loadAbilities]);

    return (
        <ItemContext.Provider
            value={{
                abilities,
                loadAbilities
            }}
        >
            {children}
        </ItemContext.Provider>
    );
}