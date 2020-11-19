import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>This is Home page</div>
      <div>You can navigate to <Link to='/items'>items</Link> page</div>
    </div>
  );
}