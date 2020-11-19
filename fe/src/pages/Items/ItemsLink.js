import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemsLink({ items=null }) {
  if(items === null || items.length === 0) {
    return <div>No items loaded</div>
  }

  return (
    <div>
      Navigate to specific Item:
      <ul>
        {items.map(i => <li key={i}><Link to={`/items/${i}`}>Item {i}</Link></li>)}
      </ul>
    </div>
  );
}