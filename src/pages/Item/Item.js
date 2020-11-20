import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getItemData } from '../../services/services';
import { useServiceCall } from '../../services/hooks';

export default function Item() {
  let { itemId } = useParams();
  const [ item, setItem ] = useState(null);
  const callService = useServiceCall();

  useEffect(() => {
    const load = async () => {
      const response = await callService(getItemData(itemId));
      setItem(response);
    }

    load();
  }, [ callService, setItem, itemId ]);

  return (
    <div>
      <div>This is page of specific Item:</div>
      <div>
        <pre style={{textAlign: 'left'}}>{JSON.stringify(item, '\n', 4)}</pre>
      </div>
    </div>
  );
}