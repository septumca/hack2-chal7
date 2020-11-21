import React, { useEffect, useState } from 'react';
import ItemContext from './ItemContext';
import { useServiceCall } from '../services/hooks';
import { getAbilities } from '../services/services';

export default function ItemProvider({ children }) {
    const serviceCall = useServiceCall();
    const [ abilities, setAbilities ] = useState(null);

    useEffect(() => {
        const load = async () => {
            const abilitiesResponse = await serviceCall(getAbilities());
            setAbilities(abilitiesResponse);
        }

        load();
    }, [setAbilities, serviceCall]);

    return (
        <ItemContext.Provider
            value={{
                abilities
            }}
        >
            {children}
        </ItemContext.Provider>
    );
}