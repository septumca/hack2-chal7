import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>This is Home page</div>
      <div>View events by <Link to='/locations/berlin'>location</Link></div>
      <div>View events by <Link to='/??'>??</Link></div>
    </div>

  );
}