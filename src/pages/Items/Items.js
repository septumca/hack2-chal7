import React, { useContext, useEffect } from 'react';

import ItemContext from '../../context/ItemContext';
import { getAllItems } from '../../services/services';
import { useServiceCall } from '../../services/hooks';
import ItemsLink from './ItemsLink';

export default function Items() {
  const { items, setItems }  = useContext(ItemContext);
  const callService = useServiceCall();

  useEffect(() => {
    const load = async () => {
      const response = await callService(getAllItems());
      if(response !== null) {
        setItems(response.items);
      }
    }

    if(items === null) {
      load();
    }
  }, [ items, setItems, callService ]);

  return (
    <div>
      <div>This is Items page</div>
      <ItemsLink items={items} />
    </div>
  );
}