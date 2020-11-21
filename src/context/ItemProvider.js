import React, { useCallback, useEffect, useState } from 'react';
import ItemContext from './ItemContext';
import { useServiceCall } from '../services/hooks';
import { getAbilities, getEvents, login } from '../services/services';

export default function ItemProvider({ children }) {
    const serviceCall = useServiceCall();
    const [ abilities, setAbilities ] = useState(null);
    const [ user, setUser ] = useState(null);
    const [ events, setEvents ] = useState([]);

    useEffect(() => {
        const load = async () => {
            const userLogin = localStorage.getItem('user-login');
            if(user === null && userLogin) {
                const result = await serviceCall(login(userLogin));
                if(result !== null) {
                    setUser(result);
                }
            }
        }
        load();
    }, [user, setUser, serviceCall])

    const loadEvents = useCallback(async () => {
        if(user === null) {
            return;
        }

        const response = await getEvents(user.account_Id);
        console.info(response);
        setEvents(response.map(e => ({
            ...e,
            img: 'https://via.placeholder.com/300x200'
        })));
    }, [setEvents, user])

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
                loadAbilities,
                user,
                setUser,
                events,
                loadEvents
            }}
        >
            {/* <pre>{JSON.stringify({ user })}</pre> */}
            {children}
        </ItemContext.Provider>
    );
}